import React, {PureComponent} from 'react';
import {Link} from 'react-router-dom';

import './PopularPostAd.css';

import hotpost1 from "../../../assets/mock/hot-post-1.jpg";
import hotpost2 from "../../../assets/mock/hot-post-2.jpg";
import hotpost3 from "../../../assets/mock/hot-post-3.jpg";

const postList = [
    {
        imgLink: hotpost1,
        categoryList: [{name: 'Lifestyle', link: 'lifestyle', id: 1}],
        id: 1,
        title: 'Postea senserit id eos, vivendo periculis ei qui',
        author: {name: 'John Doe1', id: 1},
        date: new Date('2018-04-20')
    }, {
        imgLink: hotpost2,
        categoryList: [{name: 'Lifestyle', link: 'lifestyle', id: 1}],
        id: 2,
        title: 'Sed ut perspiciatis, unde omnis, iste natus error sit',
        author: {name: 'John Doe2', id: 2},
        date: new Date('2018-04-20')
    }, {
        imgLink: hotpost3,
        categoryList: [
            {name: 'Lifestyle', link: 'lifestyle', id: 1},
            {name: 'Fashion', link: 'fashion', id: 2},
        ],
        id: 3,
        title: 'Mel ut impetus suscipit tincidunt. Cum id ullum laboramus persequeris.',
        author: {name: 'John Doe3', id: 3},
        date: new Date('2018-04-20')
    }
];

class PopularPostAd extends PureComponent {

    render() {

        const popularPostList = postList.map((post) => (
            <div key={post.id} className="post post-widget">

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
                </div>
            </div>
        ));

        return (
            <div className="aside-widget">
                <div className="section-title">
                    <h2 className="title">Popular Posts</h2>
                </div>
                {popularPostList}
            </div>
        );
    }
}

export default PopularPostAd;
