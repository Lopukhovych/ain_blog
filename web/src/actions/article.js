import axios from 'axios';

export const LOAD_ARTICLE_LIST_REQUEST = 'LOAD_ARTICLE_LIST_REQUEST';
export const LOAD_ARTICLE_LIST_SUCCESS = 'LOAD_ARTICLE_LIST_SUCCESS';
export const LOAD_ARTICLE_LIST_FAILED = 'LOAD_ARTICLE_LIST_FAILED';

export const loadArticleList = () => {
    console.log('come to load article')
    return dispatch => {
        console.log('came here');
        dispatch(loadLocationsStarted());
        axios
            .get(`http://127.0.0.1:8000/blog/articles`,)
            .then(res => {
                dispatch(loadLocationSuccess(res.data));
            })
            .catch(err => {
                dispatch(loadLocationFailed(err.message));
            });
    };
};

export const increment = () => ({type: "INC"});
const loadLocationsStarted = () => ({
    type: LOAD_ARTICLE_LIST_REQUEST
});

const loadLocationSuccess = (data) => ({
    type: LOAD_ARTICLE_LIST_SUCCESS,
    payload: data
});

const loadLocationFailed = (error) => ({
    type: LOAD_ARTICLE_LIST_FAILED,
    payload: error
});
