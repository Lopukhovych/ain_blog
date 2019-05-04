import React, {PureComponent} from 'react';
import NewsletterWidget from '../../NewsletterWidget';

import './NewsLetterAd.css';

class NewsLetterAd extends PureComponent {
    render() {
        return (
            <div className="aside-widget">
                <div className="section-title">
                    <h2 className="title">Newsletter</h2>
                </div>
                <NewsletterWidget/>
            </div>
        );
    }
}

export default NewsLetterAd;
