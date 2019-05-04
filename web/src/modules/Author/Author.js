import React, {Component, Fragment} from 'react';

import SocialMediaAd from '../../components/asideAdds/SocialMediaAd';
import CategoryAd from '../../components/asideAdds/CategoryAd';
import NewsLetterAd from '../../components/asideAdds/NewsLetterAd';
import RegularPostList from '../../components/RegularPostList';

import './Author.css';

import avatar1 from '../../assets/mock/avatar-1.jpg';
import post1 from '../../assets/mock/post-1.jpg';
import post5 from '../../assets/mock/post-5.jpg';
import post6 from '../../assets/mock/post-6.jpg';
import post13 from '../../assets/mock/post-13.jpg';

const authorInfo = {
    name: 'John Doe',
    avatar: avatar1,
    id: 1,
    shortInfo: `Using props and state, we can put together a small Todo application.
         This example uses state to track the current list of items as well as the text 
         that the user has entered. Although event handlers appear to be rendered inline,
          they will be collected and implemented using event delegation.`
};

const postList = [
    {
        id: 1,
        imgLink: post13,
        categoryList: [
            {name: 'Travel', link: 'travel', id: 4},
            {name: 'Lifestyle', link: 'lifestyle', id: 1},
        ],
        title: 'Mel ut impetus suscipit\n' +
            '            tincidunt. Cum id ullum laboramus persequeris.',
        author: {name: 'Volod', id: 1},
        date: new Date('2018-04-20'),
        previewText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor\n' +
            'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...'
    }, {
        id: 2,
        imgLink: post5,
        categoryList: [
            {name: 'Travel', link: 'travel', id: 4},
            {name: 'Lifestyle', link: 'lifestyle', id: 1},
        ],
        title: 'Mel ut impetus suscipit\n' +
            '            tincidunt. Cum id ullum laboramus persequeris.',
        author: {name: 'Volod', id: 1},
        date: new Date('2018-04-20'),
        previewText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor\n' +
            'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...'
    }, {
        id: 3,
        imgLink: post1,
        categoryList: [
            {name: 'Lifestyle', link: 'lifestyle', id: 1},
        ],
        title: 'Mel ut impetus suscipit\n' +
            '            tincidunt. Cum id ullum laboramus persequeris.',
        author: {name: 'Volod', id: 1},
        date: new Date('2018-04-20'),
        previewText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor\n' +
            'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...'
    }, {
        id: 4,
        imgLink: post6,
        categoryList: [
            {name: 'Lifestyle', link: 'lifestyle', id: 1},
        ],
        title: 'Mel ut impetus suscipit\n' +
            '            tincidunt. Cum id ullum laboramus persequeris.',
        author: {name: 'Volod', id: 1},
        date: new Date('2018-04-20'),
        previewText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor\n' +
            'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...'
    },
];

class Author extends Component {
    render() {
        return (
            <Fragment>
                <div className="section">
                    <div className="page-header">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-offset-1 col-md-10 text-center">
                                    <div className="author">
                                        <img className="author-img center-block" src={authorInfo.avatar}
                                             alt="author-avatar"/>
                                        <h1 className="text-uppercase">{authorInfo.name}</h1>
                                        <p className="lead">{authorInfo.shortInfo}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <RegularPostList postList={postList}/>
                                <div className="section-row loadmore text-center">
                                    <button className="primary-button">Load More</button>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <SocialMediaAd/>
                                <CategoryAd/>
                                <NewsLetterAd/>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Author;
