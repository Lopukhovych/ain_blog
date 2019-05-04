import React from 'react';
import {Link} from 'react-router-dom';

import './NotFound.css';

const NotFound = () => {
    return (
        <div className='section'>
            <div className="container">
                <div className="row not-found__block">
                    <h3>Sorry, page was not found! <span role="img" aria-label="disappointed">😞</span></h3>
                    <p className='not-found-explanation__article'>
                        Probably you are looking for deleted or not provided yet information. Anyway for continue 'get
                        knowing', you could return <a href="javascript:history.back();">back</a> or
                        go to <Link to='/home'>main</Link> page.
                    </p>
                    <p>
                        If you have a question contact us. If you wanna report about a bug -> contact us with subject
                        {' '}
                        <strong>bug</strong>.
                    </p>
                    <p>
                        Have a nice and rich of knowledge day! <span role="img" aria-label="winking">😉</span>
                        <br/>
                        Faithfully your, <Link to='/about-us'><b>Get Know</b></Link> team!
                    </p>
                    <div>
                        <a href="javascript:history.back();">
                            <button className="primary-button">Go back</button>
                        </a>
                        {' '}
                        <Link to='/home'>
                            <button className="secondary-button">Go to Main</button>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default NotFound;
