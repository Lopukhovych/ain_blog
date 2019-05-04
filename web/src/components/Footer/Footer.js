import React, {PureComponent} from 'react';
import {Link} from "react-router-dom";
import NewsletterWidget from '../NewsletterWidget';

import './Footer.css';

import logo from '../Header/logo.svg';


const categoryList = [
    {title: 'Lifestyle', link: 'lifestyle', postAmount: 230},
    {title: 'Fashion', link: 'fashion', postAmount: 100},
    {title: 'Health', link: 'health', postAmount: 20},
    {title: 'Travel', link: 'travel', postAmount: 15},
];
const tagList = [
    {title: 'Social', link: 'social'},
    {title: 'Lifestyle', link: 'lifestyle'},
    {title: 'Blog', link: 'blog'},
    {title: 'Travel', link: 'travel'},
    {title: 'Technology', link: 'technology'},
    {title: 'Fashion', link: 'fashion'},
    {title: 'Life', link: 'fife'},
    {title: 'News', link: 'news'},
    {title: 'Magazine', link: 'magazine'},
    {title: 'Food1', link: 'food'},
    {title: 'Health', link: 'health'},
];

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


class Footer extends PureComponent {
    constructor(props) {
        super(props);
        this.fullYear = new Date().getFullYear();
    }

    static getSocialLinkIcon(socialNetwork) {
        switch (socialNetwork.title) {
            case 'facebook':
                return (
                    <Link to={socialNetwork.link} className="social-facebook">
                        <i className="fa fa-facebook"/>
                    </Link>
                );
            case 'twitter':
                return (
                    <Link to={socialNetwork.link} className="social-twitter">
                        <i className="fa fa-twitter"/>
                    </Link>);
            case 'google-plus':
                return (
                    <Link to={socialNetwork.link} className="social-google-plus">
                        <i className="fa fa-google-plus"/>
                    </Link>);
            case 'instagram':
                return (
                    <Link to={socialNetwork.link} className="social-instagram">
                        <i className="fa fa-instagram"/>
                    </Link>
                );
            default:
                return (
                    <Link to={socialNetwork.link} className="social-default">
                        <i className="fa fa-camera-retro"/>
                    </Link>
                );
        }
    }

    render() {

        const categoryLinkList = categoryList.map((category) => (
            <li key={category.link}><Link to={`/category/${category.link}`}>{category.title}
                <span>{category.postAmount}</span></Link></li>
        ));

        const tagLinkList = tagList.map((tag) => (
            <li key={tag.link}><Link to={`/tag/${tag.link}`}>{tag.title}</Link></li>
        ));

        const socialNetworkIconList = subscribeInfo && subscribeInfo.socialNetworkList.map(item =>
            (<li key={item.title}>{Footer.getSocialLinkIcon(item)}</li>));

        return (
            <footer id="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="footer-widget">
                                <div className="footer-logo">
                                    <Link to='/home' className="logo"><img src={logo} alt=""/></Link>
                                </div>
                                <p>{subscribeInfo.socialInfo}</p>
                                <ul className="contact-social">
                                    {socialNetworkIconList}
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="footer-widget">
                                <h3 className="footer-title">Categories</h3>
                                <div className="category-widget">
                                    <ul>
                                        {categoryLinkList}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="footer-widget">
                                <h3 className="footer-title">Tags</h3>
                                <div className="tags-widget">
                                    <ul>
                                        {tagLinkList}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="footer-widget">
                                <h3 className="footer-title">Newsletter</h3>
                                <NewsletterWidget/>
                            </div>
                        </div>
                    </div>

                    <div className="footer-bottom row">
                        <div className="col-md-6 col-md-push-6">
                            <ul className="footer-nav">
                                <li><Link to='/home'>Home</Link></li>
                                <li><Link to='/about-us'>About Us</Link></li>
                                <li><Link to='/contacts'>Contacts</Link></li>
                                <li><Link to='/privacy'>Privacy</Link></li>
                            </ul>
                        </div>
                        <div className="col-md-6 col-md-pull-6">
                            <div className="footer-copyright">
                                Copyright &copy; {this.fullYear}&nbsp;
                                All rights reserved
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
