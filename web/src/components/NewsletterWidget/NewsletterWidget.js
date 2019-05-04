import React, {Component} from 'react';

import './NewsletterWidget.css';

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

class NewsletterWidget extends Component {
    render() {
        return (
            <div className="newsletter-widget">
                <form>
                    <p>{subscribeInfo.title}</p>
                    <input className="input" placeholder="Enter Your Email"/>
                    <button className="primary-button">Subscribe</button>
                </form>
            </div>
        );
    }
}

export default NewsletterWidget;
