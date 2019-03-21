import React from 'react';
import ReactDOM from 'react-dom';
// import {BrowserRouter} from 'react-router-dom';
// import {Provider} from 'react-redux';
// import {createHistory} from 'history/createBrowserHistory';



import * as serviceWorker from './serviceWorker';
import store from './reducers/index';

import './index.css';
// import App from './App';
import Root from './containers/Root';

// const history = createHistory();
// const root = (
//     <Provider store={store}>
//         <BrowserRouter>
//             <App/>
//         </BrowserRouter>
//     </Provider>
// );

const root = (<Root store={store} />);


ReactDOM.render(root, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
