import React, {PureComponent} from 'react';

class ContactUsForm extends PureComponent {
    render() {
        return (
            <div className="section-row">
                <div className="section-title">
                    <h2 className="title">Mail us</h2>
                </div>
                <form>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <input className="input" type="email" name="email"
                                       placeholder="Email"/>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="form-group">
                                <input className="input" type="text" name="subject"
                                       placeholder="Subject"/>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="form-group">
                                                    <textarea className="input" name="message"
                                                              placeholder="Message"/>
                            </div>
                            <button className="primary-button">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default ContactUsForm;
