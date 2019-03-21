import { createStore, combineReducers, applyMiddleware, compose } from 'redux'; // add compose
import article from './article'; // import root reducer
import thunk from "redux-thunk";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    article,
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

