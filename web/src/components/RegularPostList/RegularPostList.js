import React, {Component, Fragment} from 'react';
import {Link} from "react-router-dom";

import './RegularPostList.css';

class RegularPostList extends Component {
    render() {
        const regularPosts = this.props.postList.map((post) => (
            <div key={post.id} className="post post-row ">
                <Link className="post-img" to={`/post/${post.id}`}>
                    <img src={post.imgLink} alt=""/>
                </Link>
                <div className="post-body">
                    <div className="post-category">
                        {post.categoryList.map(category => (
                            <Link key={category.link} to={`/category/${category.link}`}>{category.name}</Link>
                        ))}
                    </div>
                    <h3 className="post-title">
                        <Link to={`/post/${post.id}`}>{post.title}</Link>
                    </h3>
                    <ul className="post-meta">
                        <li><Link to={`/author/${post.author.id}`}>{post.author.name}</Link></li>
                        <li>{post.date.toDateString()}</li>
                    </ul>
                    <p>{post.previewText}</p>
                </div>
            </div>
        ));
        return (
            <Fragment>
                {regularPosts}
            </Fragment>
        );
    }
}

export default RegularPostList;
