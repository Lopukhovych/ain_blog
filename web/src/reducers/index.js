import { createStore, combineReducers, applyMiddleware, compose } from 'redux'; // add compose
import post from './post'; // import root reducer
import thunk from "redux-thunk";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    post,
});

//Create Middleware:
const logger = store => {
    return next => {
        return action => {
            return next(action);
        }
    };
};

export default createStore(rootReducer, composeEnhancers(applyMiddleware(logger, thunk)));

