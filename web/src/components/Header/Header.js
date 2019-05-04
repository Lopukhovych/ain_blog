import React, {Component} from 'react';
import {Link} from "react-router-dom";

import logo from './logo.svg';

import './Header.css';

const categoryList = [
    {title: 'Lifestyle', link: 'lifestyle', postAmount: 230 },
    {title: 'Fashion', link: 'fashion', postAmount: 100 },
    {title: 'Health', link: 'health', postAmount: 20 },
    {title: 'Travel', link: 'travel', postAmount: 15 },
];

class Header extends Component {
    render() {

        const categoryLinkList = categoryList.map(category => (
            <li key={category.link}><Link className='header-links__item' to={`/category/${category.link}`}>{category.title}</Link></li>
        ));
        return (
            <header id="header">
                <div id="nav">
                    <div className="container nav__wrapper">
                        <Link to='/app' className="nav-logo"><img src={logo} alt="Logo"/></Link>
                        <ul className="nav-list">
                            <li><Link className='nav-list-item' to='/home'>Home</Link></li>
                            <li className="has-dropdown">
                                <Link className='nav-list-item with-dropdown' to='/category'>Categories</Link>
                                <div className="dropdown">
                                    <div className="dropdown-body">
                                        <ul className="dropdown-list">
                                            {categoryLinkList}
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li><Link className='nav-list-item' to='/author'>Authors</Link></li>
                            <li><Link className='nav-list-item' to='/contacts'>Contacts</Link></li>
                            <li><Link className='nav-list-item' to='/about-us'>About us</Link></li>
                        </ul>
                        <div className='search-form'>
                            <form>
                                <input className="input" name="search" placeholder="Enter your search..."/>
                                <button className="search-btn"><i className="fa fa-search"/></button>
                            </form>
                        </div>
                        <div className="authorize-form">
                            <button className='authorize-form__button' type='button'/>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;
