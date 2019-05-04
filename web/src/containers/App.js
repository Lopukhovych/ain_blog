import React, {PureComponent} from 'react';
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';

import Admin from "./Admin/Admin";
import HomePage from "../modules/HomePage";
import Contacts from "../modules/Contacts";
import AuthorList from "../modules/AuthorList";
import Author from "../modules/Author";
import Post from "../modules/Post";
import AboutUs from '../modules/AboutUs';
import CategoryList from '../modules/CategoryList';
import Category from '../modules/Category';
import Privacy from '../modules/Privacy';

import Header from '../components/Header';
import Footer from '../components/Footer';
import NotProvided from './NotProvided';
import NotFound from './NotFount';

import './App.css';

class App extends PureComponent {

    componentDidUpdate(prevProps) {
        if (this.props.location.pathname !== prevProps.location.pathname) {
            App.onRouteChanged(this.props.location.action);
        }
    }

    static onRouteChanged(action) {
        if (action !== "POP") {window.scrollTo(0, 0);}
    }

    render() {
        return (
            <div className="App">
                <Header/>
                <main>
                    <Switch>
                        <Route exact path='/' component={HomePage}/>
                        <Redirect from='/app' to='/home'/>
                        <Redirect from='/home' to='/'/>
                        <Route exact path='/author' component={AuthorList}/>
                        <Route path='/author/:id' component={Author}/>
                        <Route exact path='/post/:id' component={Post}/>
                        <Route exact path='/category' component={CategoryList}/>
                        <Route path='/category/:link' component={Category}/>
                        <Route exact path='/about-us' component={AboutUs}/>
                        <Route exact path='/contacts' component={Contacts}/>
                        <Route exact path='/privacy' component={Privacy}/>
                        <Route exact path='/not-provided-yet' component={NotProvided}/>
                        <Route exact path="/admin" component={Admin}/>
                        <Route path='/not-found' component={NotFound}/>
                        <Redirect from='*' to='/not-found'/>
                    </Switch>
                </main>
                <Footer/>
            </div>
        );
    }
}


export default withRouter(App);
