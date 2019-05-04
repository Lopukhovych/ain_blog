import React, {Component} from 'react';

import InstagramAd from '../asideAdds/InstagramAd';
import RegularPostList from '../RegularPostList';


import post1 from '../../assets/mock/post-1.jpg';
import post2 from '../../assets/mock/post-2.jpg';
import post3 from '../../assets/mock/post-3.jpg';
import post4 from '../../assets/mock/post-4.jpg';
import post7 from '../../assets/mock/post-7.jpg';


const postList = [
    {
        imgLink: post1,
        categoryList: [{name: 'Lifestyle', link: 'lifestyle', id: 1}],
        id: 1,
        title: 'Postea senserit id eos, vivendo periculis ei qui',
        author: {name: 'Volod', id: 1},
        date: new Date('2018-04-20'),
        previewText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor\n' +
            'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...'
    }, {
        imgLink: post2,
        categoryList: [{name: 'Lifestyleqwerty', link: 'lifestyle', id: 1}],
        id: 2,
        title: 'Postea senserit id eos, vivendo periculis ei qui',
        author: {name: 'Volod', id: 1},
        date: new Date('2018-04-20'),
        previewText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor\n' +
            'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...'
    }, {
        imgLink: post3,
        categoryList: [
            {name: 'Lifestyle', link: 'lifestyle', id: 1},
            {name: 'Fashion', link: 'fashion', id: 2},
        ],
        id: 3,
        title: 'Postea senserit id eos, vivendo periculis ei qui',
        author: {name: 'Volod', id: 1},
        date: new Date('2018-04-20'),
        previewText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor\n' +
            'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...'
    }, {
        imgLink: post4,
        categoryList: [
            {name: 'Fashion', link: 'fashion'},
        ],
        id: 4,
        title: 'Postea senserit id eos, vivendo periculis ei qui',
        author: {name: 'Volod', id: 1},
        date: new Date('2018-04-20'),
        previewText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor\n' +
            'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...'
    }, {
        imgLink: post7,
        categoryList: [
            {name: 'Travel', link: 'travel'},
            {name: 'Fashion', link: 'fashion'},
        ],
        id: 7,
        title: 'Postea senserit id eos, vivendo periculis ei qui',
        author: {name: 'Volod', id: 1},
        date: new Date('2018-04-20'),
        previewText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor\n' +
            'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...'
    },
];

class RegularNews extends Component {
    render() {

        return (
            <div className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <RegularPostList postList={postList} />
                            <div className="section-row loadmore text-center">
                                <button className="primary-button">Load More</button>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <InstagramAd/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default RegularNews;
