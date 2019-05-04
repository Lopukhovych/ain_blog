import React from 'react';
import {Link} from "react-router-dom";

import './SocialMediaAd.css';

const subscribeInfo = {
    title: 'Sent your email to receive the latest news',
    socialInfo: 'Subscribe our channels in social networks to be a part of community',
    socialNetworkList: [
        {title: 'facebook', link: '/not-provided-yet', followers: 22},
        {title: 'twitter', link: '/not-provided-yet', followers: 23},
        {title: 'google-plus', link: '/not-provided-yet', followers: 44000},
        {title: 'instagram', link: '/not-provided-yet', followers: 22060},
    ]
};

const followersHandler = (followersNumber) => {
    return followersNumber < 1000 ? followersNumber : `${Math.round(followersNumber / 100) / 10}k`
};

const socialMediaAd = () => {
    const socialNetworkList = subscribeInfo.socialNetworkList;

    const getSocialElement = (item) => {
        switch (item.title) {
            case 'facebook':
                return (
                    <Link to={item.link} className="social-facebook">
                        <i className="fa fa-facebook"/>
                        <span>{followersHandler(item.followers)}<br/>Followers</span>
                    </Link>
                );
            case 'twitter':
                return (
                    <Link to={item.link} className="social-twitter">
                        <i className="fa fa-twitter"/>
                        <span>{followersHandler(item.followers)}<br/>Followers</span>
                    </Link>
                );
            case 'google-plus':
                return (
                    <Link to={item.link} className="social-google-plus">
                        <i className="fa fa-google-plus"/>
                        <span>{followersHandler(item.followers)}<br/>Followers</span>
                    </Link>
                );
            case 'instagram':
                return (
                    <Link to={item.link} className="social-instagram">
                        <i className="fa fa-instagram"/>
                        <span>{followersHandler(item.followers)}<br/>Followers</span>
                    </Link>
                );
            default:
                return (
                    <Link to={item.link} className="social-default">
                        <i className="fa fa-camera-retro"/>
                        <span>{followersHandler(item.followers)}<br/>Followers</span>
                    </Link>
                );
        }
    };
    const socialAddList = socialNetworkList.map(item =>
        (<li key={item.title}>{getSocialElement(item)}</li>));

    return (
        <div className="aside-widget">
            <div className="section-title">
                <h2 className="title">Social Media</h2>
            </div>
            <div className="social-widget">
                <ul>
                    {socialAddList}
                </ul>
            </div>
        </div>
    );
};

export default socialMediaAd;
