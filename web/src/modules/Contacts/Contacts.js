import React, {Component, Fragment} from 'react';

import SocialMediaAd from '../../components/asideAdds/SocialMediaAd';
import NewsLetterAd from '../../components/asideAdds/NewsLetterAd';
import ContactUsForm from '../../components/ContactUsForm';

const contactInfo = {
    leadInfo: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do 
    eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    mainInfo: `Malis debet quo et, eam an lorem quaestio. Mea ex quod facer decore, eu nam mazim
                                        postea. Eu deleniti pertinacia ius. Ad elitr latine eam, ius sanctus eleifend
                                        no, cu primis graecis comprehensam eum. Ne vim prompta consectetuer, etiam
                                        signiferumque ea eum.`,
    phoneNumber: '+380993870046',
    email: 'help@getknow.com',
    address: 'Heroiv Stalinhradu Avenue 53b, Kyiv, Ukraine, 04213'
};

class Contacts extends Component {
    render() {
        return (
            <Fragment>
                <div className="section">
                    <div className="page-header">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 text-center">
                                    <h1 className="text-uppercase">Contacts</h1>
                                    <p className="lead">{contactInfo.leadInfo}</p>
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
                                    <div className="section-title">
                                        <h2 className="title">Contact Information</h2>
                                    </div>
                                    <p>{contactInfo.mainInfo}</p>
                                    <ul className="contact">
                                        <li><i className="fa fa-phone"/> {contactInfo.phoneNumber}</li>
                                        <li><i className="fa fa-envelope"/>{contactInfo.email}</li>
                                        <li><i className="fa fa-map-marker"/>{contactInfo.address}</li>
                                    </ul>
                                </div>
                                <ContactUsForm/>
                            </div>
                            <div className="col-md-4">
                                <SocialMediaAd/>
                                <NewsLetterAd/>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Contacts;
