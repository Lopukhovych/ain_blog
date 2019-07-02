import json

from blog.models import User, Comment, Article
from blog.utils import return_url_from_file_field
from django.forms.models import model_to_dict

from channels.generic.websocket import AsyncWebsocketConsumer


class CommentConsumer(AsyncWebsocketConsumer):

    async def connect(self):
        self.article_id = self.scope.get('url_route').get('kwargs').get('article_id')
        self.article_room = 'article-%s' % (self.article_id)

        # Join room group
        await self.channel_layer.group_add(
            self.article_room,
            self.channel_name
        )

        await self.accept()

    async def disconnect(self, close_code):
        # Leave room group
        await self.channel_layer.group_discard(
            self.article_room,
            self.channel_name
        )

    # Receive message from WebSocket
    async def websocket_receive(self, message):
        try:
            content = json.loads(message.get('text', ''))
            message = str(content.get('message', ''))

            article = Article.objects.get(id=self.article_id)
            author_id = content.get('id', None)

            if article:
                author = User.objects.get(id=author_id) if author_id else None

                if author:
                    comment = Comment.objects \
                        .create(article=article, author=author, text=message)
                else:
                    anonimus = User.objects.get(id=3)
                    comment = Comment.objects \
                        .create(article=article, author=anonimus, text=message)

                comment_data = model_to_dict(comment)
                comment_data['author'] = return_url_from_file_field(
                    model_to_dict(comment.author, exclude=['role', 'status', 'short_info']))
                comment_data['time'] = comment.time.strftime('%Y-%m-%d %H:%M')

                comment.save()

                # Send message to room group
                await self.channel_layer.group_send(
                    self.article_room,
                    {
                        'type': 'article_message',
                        'message': comment_data
                    }
                )
        except Exception as error:
            print('error: ', error)
            await self.disconnect()

    # Receive message from room group
    async def article_message(self, event):
        message = event['message']

        # Send message to WebSocket
        await self.send(text_data=json.dumps({
            'message': message
        }))
