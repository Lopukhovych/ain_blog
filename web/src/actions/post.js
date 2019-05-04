import axios from 'axios';

export const LOAD_POST_LIST_REQUEST = 'LOAD_POST_LIST_REQUEST';
export const LOAD_POST_LIST_SUCCESS = 'LOAD_POST_LIST_SUCCESS';
export const LOAD_POST_LIST_FAILED = 'LOAD_POST_LIST_FAILED';

export const loadPostList = () => {
    console.log('come to load article');
    return dispatch => {
        console.log('came here');
        dispatch(loadLocationsStarted());
        axios
            .get(`http://127.0.0.1:8000/blog/post-list`,)
            .then(res => {
                dispatch(loadLocationSuccess(res.data));
            })
            .catch(err => {
                dispatch(loadLocationFailed(err.message));
            });
    };
};

const loadLocationsStarted = () => ({
    type: LOAD_POST_LIST_REQUEST
});

const loadLocationSuccess = (data) => ({
    type: LOAD_POST_LIST_SUCCESS,
    payload: data
});

const loadLocationFailed = (error) => ({
    type: LOAD_POST_LIST_FAILED,
    payload: error
});
