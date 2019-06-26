"""
ASGI entrypoint file for default channel layer.
Points to the channel layer configured as "default" so you can point
ASGI applications at "multichat.asgi:channel_layer" as their channel layer.
"""

import os
import django

from channels.routing import get_default_application
# from channels.asgi import get_channel_layer

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "main.settings")
django.setup()
application = get_default_application()
