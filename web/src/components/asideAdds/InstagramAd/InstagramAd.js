import React from 'react';
import {Link} from "react-router-dom";

import './InstagramAd.css';

import galery1 from "../../../assets/mock/galery-1.jpg";
import galery2 from "../../../assets/mock/galery-2.jpg";
import galery3 from "../../../assets/mock/galery-3.jpg";
import galery4 from "../../../assets/mock/galery-4.jpg";
import galery5 from "../../../assets/mock/galery-5.jpg";
import galery6 from "../../../assets/mock/galery-6.jpg";

const imgList = [
    galery1, galery2, galery3, galery4, galery5, galery6,
];

const InstagramAd = () => {
    const listLink = imgList.map((item, index) => (
        <li key={index}><Link to='#'><img src={item} alt=""/></Link></li>
    ));
    return (
        <div className="aside-widget">
            <div className="section-title">
                <h2 className="title">Instagram</h2>
            </div>
            <div className="galery-widget">
                <ul>
                    {listLink}
                </ul>
            </div>
        </div>
    );
};

export default InstagramAd;
