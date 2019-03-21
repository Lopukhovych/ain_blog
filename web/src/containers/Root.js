import React from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import {Provider} from "react-redux";

import App from "./App";
import Admin from './Admin';

const Root = ({store}) => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Redirect from='/' to='/app' exact/>
                    <Route path="/app" component={App}/>
                    <Route path="/admin" component={Admin}/>
                    <Redirect from='*' to='/app' exact/>
                </Switch>
            </BrowserRouter>
        </Provider>
    );
};

export default Root;
