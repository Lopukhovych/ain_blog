import {
    LOAD_POST_LIST_REQUEST,
    LOAD_POST_LIST_SUCCESS,
    LOAD_POST_LIST_FAILED
} from '../actions/post'

const initialState = {
    post_list: null,
    pending: false,
    error: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_POST_LIST_REQUEST:
            console.log('come to reducers');
            return {
                ...state,
                pending: true,
            };
        case LOAD_POST_LIST_SUCCESS:
            return {
                ...state,
                peding: false,
                post_list: action.payload,
                error: null,
            };
        case LOAD_POST_LIST_FAILED:
            return {
                ...state,
                peding: false,
                post_list: null,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default reducer;
