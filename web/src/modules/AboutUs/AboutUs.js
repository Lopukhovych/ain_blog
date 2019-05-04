import React, {Fragment} from 'react';

import './AboutUs.css';

const aboutUs = {
    slogan: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    story: `Lorem ipsum dolor sit amet, mea ad idque detraxit, cu soleat graecis invenire eam. Vidisse suscipit 
    liberavisse has ex, vocibus patrioque vim et, sed ex tation reprehendunt. Mollis volumus no vix, ut qui clita
     habemus, ipsum senserit est et. Ut has soluta epicurei mediocrem, nibh nostrum his cu, sea clita electram
      reformidans an.`,
    comment: {
        content: `Ei prima graecis consulatu vix, per cu corpora qualisque voluptaria. Bonorum
                                        moderatius in per, ius cu albucius voluptatum. Ne ius torquatos dissentiunt.
                                        Brute illum utroque eu quo. Cu tota mediocritatem vis, aliquip cotidieque eu
                                        ius, cu lorem suscipit eleifend sit.`,
        authorName: 'Vasya Three'
    },
    vision: [
        `Est in saepe accusam luptatum. Purto deleniti philosophia eum ea, impetus copiosae id
                                    mel. Vis at ignota delenit democritum, te summo tamquam delicata pro. Utinam
                                    concludaturque et vim, mei ullum intellegam ei. Eam te illum nostrud, suas sonet
                                    corrumpit ea per. Ut sea regione posidonium. Pertinax gubergren ne qui, eos an harum
                                    mundi quaestio.`,
        `Nihil persius id est, iisque tincidunt abhorreant no duo. Eripuit placerat mnesarchum
                                    ius at, ei pro laoreet invenire persecuti, per magna tibique scriptorem an. Aeque
                                    oportere incorrupte ius ea, utroque erroribus mel in, posse dolore nam in. Per
                                    veniam vulputate intellegam et, id usu case reprimique, ne aperiam scaevola sed.
                                    Veritus omnesque qui ad. In mei admodum maiorum iracundia, no omnis melius eum, ei
                                    erat vivendo his. In pri nonumes suscipit.`
    ]

};

const AboutUs = () => {
    return (
        <Fragment>
            <div className="section">
                <div className="page-header">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <h1 className="text-uppercase">About Us</h1>
                                <p className="lead">
                                    {aboutUs.slogan}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="section-row">
                                <div className="section-title">
                                    <h2 className="title">Our story</h2>
                                </div>
                                <p> {aboutUs.story}</p>
                                <blockquote className="blockquote">
                                    <p>{aboutUs.comment.content}</p>
                                    <footer className="blockquote-footer">{aboutUs.comment.authorName}</footer>
                                </blockquote>
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="section-row">
                                <div className="section-title">
                                    <h2 className="title">Our Vision</h2>
                                </div>
                                {aboutUs.vision && aboutUs.vision
                                    .map((item, index) => (<p key={index}>{item}</p>))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default AboutUs;