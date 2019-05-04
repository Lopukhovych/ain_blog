import React, {PureComponent} from 'react';
import {HashLink} from 'react-router-hash-link';


import avatar2 from "../../assets/mock/avatar-2.jpg";
import avatar3 from "../../assets/mock/avatar-3.jpg";

class CommentList extends PureComponent {

    render() {
        const {commentList} = this.props;

        const commentItemList = commentList.map((comment) => (
            <div key={comment.id} className="media">
                <div className="media-left">
                    <img className="media-object" src={comment.avatar} alt=""/>
                </div>
                <div className="media-body">
                    <div className="media-heading">
                        <h4>{comment.authorName}</h4>
                        {/*<span className="time">5 min ago</span>*/}
                        <span className="time">{comment.time}</span>
                    </div>
                    <p>{comment.text}</p>
                    <HashLink smooth to='#leaveComment' className="reply">Reply</HashLink>
                </div>
            </div>
        ));
        return (
            <div id='commentList' className="section-row">
                <div className="section-title">
                    <h3 className="title">{commentList.length} Comments</h3>
                </div>
                <div className="post-comments">
                    {commentItemList}
                </div>
            </div>
        );
    }
}

export default CommentList;
