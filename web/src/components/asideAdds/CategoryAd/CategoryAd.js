import React from 'react';
import {Link} from 'react-router-dom';

import './CategoryAd.css';

const categoryList = [
    {title: 'Lifestyle', link: 'lifestyle', postAmount: 230},
    {title: 'Fashion', link: 'fashion', postAmount: 100},
    {title: 'Health', link: 'health', postAmount: 20},
    {title: 'Travel', link: 'travel', postAmount: 15},
];

const CategoryAd = () => {
    const categoryLinkList = categoryList.map((category) => (
        <li key={category.link}><Link to={`/category/${category.link}`}>{category.title}
            <span>{category.postAmount}</span></Link></li>
    ));
    return (
        <div className="aside-widget">
            <div className="section-title">
                <h2 className="title">Categories1</h2>
            </div>
            <div className="category-widget">
                <ul>
                    {categoryLinkList}
                </ul>
            </div>
        </div>
    );
};

export default CategoryAd;
