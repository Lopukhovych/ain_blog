import React, {Component} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import './App.css';
import {loadArticleList, increment} from '../actions/article';
import LastNews from "../modules/LastNews/LastNews";
import PopularNews from "../modules/PopularNews/PopularNews";
import NotFound from './NotFound';

class App extends Component {
    constructor(props) {
        super(props);
        console.log('props.match: ', props.match.path);
        console.log('props.url: ', props.url);
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        const {loadArticleList} = this.props;
        console.log("Sending a GET API Call !!!");
        console.log('loadLocations: ', loadArticleList);
        loadArticleList();
    }

    render() {
        const {locations, pending, match} = this.props;
        return (
            <div className="App">

                <div>
                    Hello here!
                </div>
                <button type="button" onClick={this.onClick}>Send GET /products</button>
                <div>{pending ? 'pending' : locations}</div>
                <Switch>
                    <Route exact path={`${match.path}`} component={LastNews}/>
                    <Route path={`${match.path}/popular`} component={PopularNews}/>
                    <Route path={`${match.path}/not-found`} component={NotFound}/>
                    <Redirect from='*' to={`${match.path}/not-found`} />
                </Switch>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    article_list: state.article.article_list,
    pending: state.article.pending,
    error: state.article.error,
});

const mapDispatchToProps = {
    loadArticleList,
    increment
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
