import React, {Component} from 'react';
import {Link} from "react-router-dom";

import hotpost1 from '../../assets/mock/hot-post-1.jpg';
import hotpost2 from '../../assets/mock/hot-post-2.jpg';
import hotpost3 from '../../assets/mock/hot-post-3.jpg';

const postList = [
    {
        imgLink: hotpost1,
        categoryList: [{name: 'Lifestyle', link: 'lifestyle'}],
        id: 1,
        title: 'Postea senserit id eos, vivendo periculis ei qui',
        author: {name: 'John Doe1', id: 1},
        date: new Date('2018-04-20')
    }, {
        imgLink: hotpost2,
        categoryList: [{name: 'Lifestyle', link: 'lifestyle'}],
        id: 2,
        title: 'Sed ut perspiciatis, unde omnis, iste natus error sit',
        author: {name: 'John Doe2', id: 2},
        date: new Date('2018-04-20')
    }, {
        imgLink: hotpost3,
        categoryList: [
            {name: 'Lifestyle', link: 'lifestyle'},
            {name: 'Fashion', link: 'fashion'},
        ],
        id: 3,
        title: 'Mel ut impetus suscipit tincidunt. Cum id ullum laboramus persequeris.',
        author: {name: 'John Doe3', id: 3},
        date: new Date('2018-04-20')
    }, {
        imgLink: hotpost3,
        categoryList: [
            {name: 'Lifestyle', link: 'lifestyle'},
            {name: 'Fashion', link: 'fashion'},
        ],
        id: 3,
        title: 'Mel ut impetus suscipit tincidunt. Cum id ullum laboramus persequeris.',
        author: {name: 'John Doe3', id: 3},
        date: new Date('2018-04-20')
    }
];

class PopularNews extends Component {
    render() {

        const popularPosts = postList.map((post, postIndex) => {
            if (postIndex < 3) {
                return (
                    <div key={post.id} className="post post-thumb">
                        <Link className="post-img" to={`/post/${post.id}`}>
                            <img src={post.imgLink} alt=""/>
                        </Link>
                        <div className="post-body">
                            <div className="post-category">
                                {post.categoryList.map(category => (
                                    <Link key={category.link} to={`/category/${category.link}`}>{category.name}</Link>
                                ))}
                            </div>
                            <h3 className={`post-title ${postIndex === 0 ? 'title-lg' : null}`}>
                                <Link to={`/post/${post.id}`}>{post.title}</Link>
                            </h3>
                            <ul className="post-meta">
                                <li><Link to={`/author/${post.author.id}`}>{post.author.name}</Link></li>
                                <li>{post.date.toDateString()}</li>
                            </ul>
                        </div>
                    </div>
                )
            }
        });
        const firstPost = null || popularPosts[0];
        const asidePosts = null || popularPosts.slice(1);

        return (
            <div className="section">
                <div className="container">
                    <div id="hot-post" className="row hot-post">
                        <div className="col-md-8 hot-post-left">
                            {firstPost}
                        </div>
                        <div className="col-md-4 hot-post-right">
                            {asidePosts}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PopularNews;
