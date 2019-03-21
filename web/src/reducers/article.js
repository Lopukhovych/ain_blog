import {
    LOAD_ARTICLE_LIST_REQUEST,
    LOAD_ARTICLE_LIST_SUCCESS,
    LOAD_ARTICLE_LIST_FAILED
} from '../actions/article'

const initialState = {
    article_list: null,
    pending: false,
    error: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_ARTICLE_LIST_REQUEST:
            console.log('come to reducers');
            return {
                ...state,
                pending: true,
            };
        case LOAD_ARTICLE_LIST_SUCCESS:
            return {
                ...state,
                peding: false,
                article_list: action.payload,
                error: null,
            };
        case LOAD_ARTICLE_LIST_FAILED:
            return {
                ...state,
                peding: false,
                article_list: null,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default reducer;
