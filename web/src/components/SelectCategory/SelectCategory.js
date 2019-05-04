import React, {Component} from 'react';
import Slider from "react-slick";
import {Link} from "react-router-dom";

import post5 from '../../assets/mock/post-5.jpg';
import post6 from '../../assets/mock/post-6.jpg';
import post9 from '../../assets/mock/post-9.jpg';


import './SelectCategory.css';

const categoryList = [
    {
        imgLink: post5,
        categoryList: [
            {name: 'Lifestyle', link: 'lifestyle', id: 1},
            {name: 'Fashion', link: 'fashion', id: 2},
        ],
        id: 1,
        title: 'Mel ut impetus suscipit tincidunt. Cum id ullum laboramus persequeris.',
        author: {name: 'John Doe3', id: 3},
        date: new Date('2018-04-20')
    }, {
        imgLink: post6,
        categoryList: [
            {name: 'Fashion', link: 'fashion', id: 2},
        ],
        id: 2,
        title: 'Mel ut impetus suscipit tincidunt. Cum id ullum laboramus persequeris.',
        author: {name: 'John Doe3', id: 3},
        date: new Date('2018-04-20')
    }, {
        imgLink: post9,
        categoryList: [
            {name: 'Travel', link: 'travel', id: 3},
            {name: 'Fashion', link: 'fashion', id: 2},
        ],
        id: 9,
        title: 'Mel ut impetus suscipit tincidunt. Cum id ullum laboramus persequeris.',
        author: {name: 'John Doe3', id: 3},
        date: new Date('2018-04-20')
    }, {
        imgLink: post5,
        categoryList: [
            {name: 'Lifestyle', link: 'lifestyle', id: 1},
            {name: 'Fashion', link: 'fashion', id: 2},
        ],
        id: 5,
        title: 'Mel ut impetus suscipit tincidunt. Cum id ullum laboramus persequeris.',
        author: {name: 'John Doe3', id: 3},
        date: new Date('2018-04-20')
    },
];

class SelectCategory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeItemIndex: 0,
        }
    }

    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1
        };
        const selectCategoryList = categoryList.map(post => (
            <div className="col-12" key={post.id}>

                <div className="section-title">
                    <h2 className="title">
                        <Link to={`/category/${post.categoryList[0]['link']}`}>
                            {post.categoryList[0]['name']}
                        </Link>
                    </h2>
                </div>
                <div className="post">
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
                    </div>
                </div>
            </div>
        ));
        return (
            <div className="section">
                <div className="container">
                    <Slider {...settings}>
                        {selectCategoryList}
                    </Slider>
                </div>
            </div>
        );
    }
}

export default SelectCategory;
