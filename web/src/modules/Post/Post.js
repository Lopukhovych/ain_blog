import React, {Component, Fragment} from 'react';
import {HashLink} from 'react-router-hash-link';
import {Link} from "react-router-dom";


import SocialMediaAd from '../../components/asideAdds/SocialMediaAd';
import CategoryAd from '../../components/asideAdds/CategoryAd';
import NewsLetterAd from '../../components/asideAdds/NewsLetterAd';
import PopularPostAd from '../../components/asideAdds/PopularPostAd';
import InstagramAd from '../../components/asideAdds/InstagramAd';
import CommentList from '../../components/CommentList';
import LeaveACommentForm from '../../components/LeaveACommentForm';

import './Post.css';
import header1 from '../../assets/mock/header-1.jpg';
import media1 from '../../assets/mock/media-1.jpg';
import media2 from '../../assets/mock/media-2.jpg';
import avatar1 from '../../assets/mock/avatar-1.jpg';
import avatar2 from '../../assets/mock/avatar-2.jpg';
import avatar3 from '../../assets/mock/avatar-3.jpg';

// import post4 from '../../assets/mock/post-4.jpg'; // commented
// import widget8 from '../../assets/mock/widget-8.jpg'; // commented
// import widget10 from '../../assets/mock/widget-10.jpg'; // commented

const post = (
    <Fragment>
        <h3>React - A JavaScript library for building user interfaces</h3>
        <p>Lorem ipsum dolor sit amet, mea ad idque detraxit, cu soleat graecis invenire
            eam. Vidisse suscipit liberavisse has ex, vocibus patrioque vim et, sed ex
            tation reprehendunt. Mollis volumus no vix, ut qui clita habemus, ipsum senserit
            est et. Ut has soluta epicurei mediocrem, nibh nostrum his cu, sea clita
            electram reformidans an.</p>
        <p>Est in saepe accusam luptatum. Purto deleniti philosophia eum ea, impetus
            copiosae id mel. Vis at ignota delenit democritum, te summo tamquam delicata
            pro. Utinam concludaturque et vim, mei ullum intellegam ei. Eam te illum
            nostrud, suas sonet corrumpit ea per. Ut sea regione posidonium. Pertinax
            gubergren ne qui, eos an harum mundi quaestio.</p>
        <figure className="pull-right">
            <img src={media1} alt=""/>
            <figcaption>Lorem ipsum dolor sit amet, mea ad idque detraxit,</figcaption>
        </figure>
        <p>Nihil persius id est, iisque tincidunt abhorreant no duo. Eripuit placerat
            mnesarchum ius at, ei pro laoreet invenire persecuti, per magna tibique
            scriptorem an. Aeque oportere incorrupte ius ea, utroque erroribus mel in, posse
            dolore nam in. Per veniam vulputate intellegam et, id usu case reprimique, ne
            aperiam scaevola sed. Veritus omnesque qui ad. In mei admodum maiorum iracundia,
            no omnis melius eum, ei erat vivendo his. In pri nonumes suscipit.</p>
        <p>Sit nulla quidam et, eam ea legimus deserunt neglegentur. Et veri nostrud vix,
            meis minimum atomorum ex sea, stet case habemus mea no. Ut dignissim dissentiet
            his, mei ea delectus delicatissimi, debet dissentiunt te duo. Sonet partiendo et
            qui, pro et veri solet singulis. Vidit viderer eleifend ad nam. Minimum eligendi
            suscipit ius et, vis ex laoreet detracto scripserit, at sumo sale solum pro.</p>
        <blockquote className="blockquote">
            <p>Ei prima graecis consulatu vix, per cu corpora qualisque voluptaria. Bonorum
                moderatius in per, ius cu albucius voluptatum. Ne ius torquatos dissentiunt.
                Brute illum utroque eu quo. Cu tota mediocritatem vis, aliquip cotidieque eu
                ius, cu lorem suscipit eleifend sit.</p>
            <footer className="blockquote-footer">John Doe</footer>
        </blockquote>
        <p>Mei cu diam sonet audiam, his ad impetus fuisset indoctum. Te sit altera
            qualisque, stet suavitate ne vel. Euismod suavitate duo eu, habemus rationibus
            neglegentur ei qui. Debet omittam ad usu, ex vero feugait oporteat eos, id usu
            sint numquam sententiae.</p>
        <figure>
            <img src={media2} alt=""/>
        </figure>
        <h3>Sit nulla quidam et, eam ea legimus deserunt neglegentur.</h3>
        <p>No possim singulis sea, dolores salutatus interpretaris eam ad. An singulis
            postulant his, an inermis urbanitas mel. Wisi veri noster eu est, diam ridens
            eum in. Omnium imperdiet patrioque quo in, est sumo persecuti abhorreant ei. Sed
            feugiat iracundia id, inermis percipit eu has.</p>
        <p>In vidit homero ullamcorper his, ea mea senserit constituto, et alia idque congue
            sit. Postea percipit his ne. Probo movet noluisse in nam, sed ex utroque inermis
            corrumpit, oratio tation vix at. Usu aperiri assentior at, eam et melius
            iudicabit pertinacia.</p>
    </Fragment>
);


const postInfo = {
    id: 1,
    title: 'A JavaScript library for building user interfaces',
    content: post,
    coverImage: header1,
    author: {
        name: 'John Doe',
        avatar: avatar1,
        id: 1,
        shortInfo: `Using props and state, we can put together a small Todo application.
         This example uses state to track the current list of items as well as the text 
         that the user has entered. Although event handlers appear to be rendered inline,
          they will be collected and implemented using event delegation.`
    },
    categoryList: [
        {name: 'Lifestyle', link: 'lifestyle', id: 1},
        {name: 'Fashion', link: 'fashion', id: 2},
    ],
    status: 'published',
    viewNumber: 806,
    commentList: [
        {
            id: 1,
            authorName: 'Gary Oldman',
            avatar: avatar2,
            text: 'React allows you to interface with other libraries and frameworks. This example uses remarkable',
            time: new Date().toDateString()
        },
        {
            id: 2,
            avatar: avatar3,
            text: 'Although event handlers appear to be rendered inline, they will be collected and implemented using event delegation.',
            authorName: 'Doggy mom',
            time: new Date().toDateString()
        }
    ],
    tagList: [
        {title: 'Social', link: 'social'},
        {title: 'Lifestyle', link: 'lifestyle'},
        {title: 'Blog', link: 'blog'},
        {title: 'Travel', link: 'travel'},
        {title: 'Technology', link: 'technology'},
    ],
    imageLinkList: {
        img1: {path: media1, figcaption: 'A Simple Component'},
        img2: {path: media2, figcaption: 'A Stateful Component'},
    },
    public_date: new Date('2018-08-02'),
    created_date: new Date('2018-08-02'),
    updated_date: new Date('2018-08-02'),
};


class Post extends Component {
    render() {

        return (
            <Fragment>
                <div className='section'>
                    <div id="post-header" className="page-header">
                        <div className="page-header-bg" style={{backgroundImage: `url(${postInfo.coverImage})`}}
                             data-stellar-background-ratio="0.5"/>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-10">
                                    <div className="post-category">
                                        {postInfo.categoryList.map(category => (
                                            <Link key={category.link}
                                                  to={`/category/${category.link}`}>{category.name}</Link>
                                        ))}
                                    </div>
                                    <h1>{postInfo.title}</h1>
                                    <ul className="post-meta">
                                        <li><Link to={`/author/${postInfo.author.id}`}>{postInfo.author.name}</Link>
                                        </li>
                                        <li>{postInfo.public_date.toDateString()}</li>
                                        <li>
                                            <HashLink smooth to='#commentList'>
                                                <i className="fa fa-comments"/> {postInfo.commentList.length || 0}
                                            </HashLink>
                                        </li>
                                        <li><i className="fa fa-eye"/> {postInfo.viewNumber}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <div className="section-row">
                                    {postInfo.content}
                                </div>

                                <div className="section-row">
                                    <div className="post-tags">
                                        <ul>
                                            <li>TAGS:</li>
                                            {postInfo && postInfo.tagList.map((tag) => (
                                                <li key={tag.link}><Link to={`/tag/${tag.link}`}>{tag.title}</Link></li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/*<div className="section-row">*/}
                                {/*<div className="post-nav">*/}
                                {/*<div className="prev-post">*/}
                                {/*<a className="post-img" href="blog-post.html"><img src={widget8}*/}
                                {/*alt=""/></a>*/}
                                {/*<h3 className="post-title"><a href="#">Sed ut perspiciatis, unde omnis iste*/}
                                {/*natus error sit</a></h3>*/}
                                {/*<span>Previous post</span>*/}
                                {/*</div>*/}

                                {/*<div className="next-post">*/}
                                {/*<a className="post-img" href="blog-post.html"><img src={widget10}*/}
                                {/*alt=""/></a>*/}
                                {/*<h3 className="post-title"><a href="#">Postea senserit id eos, vivendo*/}
                                {/*periculis ei qui</a></h3>*/}
                                {/*<span>Next post</span>*/}
                                {/*</div>*/}
                                {/*</div>*/}
                                {/*</div>*/}

                                <div className="section-row">
                                    <div className="section-title">
                                        <h3 className="title">
                                            About <Link
                                            to={`/author/${postInfo.author.id}`}>{postInfo.author.name}</Link>
                                        </h3>
                                    </div>
                                    <div className="author media">
                                        <div className="media-left">
                                            <Link to={`/author/${postInfo.author.id}`}>
                                                <img className="author-img media-object" src={postInfo.author.avatar}
                                                     alt=""/>
                                            </Link>
                                        </div>
                                        <div className="media-body">
                                            <p>{postInfo.author.shortInfo}</p>
                                        </div>
                                    </div>
                                </div>

                                {/*<div>*/}
                                {/*<div className="section-title">*/}
                                {/*<h3 className="title">Related Posts</h3>*/}
                                {/*</div>*/}
                                {/*<div className="row">*/}
                                {/*<div className="col-md-4">*/}
                                {/*<div className="post post-sm">*/}
                                {/*<a className="post-img" href="blog-post.html"><img*/}
                                {/*src={post4} alt=""/></a>*/}
                                {/*<div className="post-body">*/}
                                {/*<div className="post-category">*/}
                                {/*<a href="category.html">Health</a>*/}
                                {/*</div>*/}
                                {/*<h3 className="post-title title-sm"><a href="blog-post.html">Postea*/}
                                {/*senserit id eos, vivendo periculis ei qui</a></h3>*/}
                                {/*<ul className="post-meta">*/}
                                {/*<li><a href="author.html">John Doe</a></li>*/}
                                {/*<li>20 April 2018</li>*/}
                                {/*</ul>*/}
                                {/*</div>*/}
                                {/*</div>*/}
                                {/*</div>*/}
                                {/*</div>*/}
                                {/*</div>*/}
                                <CommentList commentList={postInfo.commentList}/>
                                <LeaveACommentForm/>

                            </div>
                            <div className="col-md-4">
                                <SocialMediaAd/>
                                <CategoryAd/>
                                <NewsLetterAd/>
                                <PopularPostAd/>
                                <InstagramAd/>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Post;
