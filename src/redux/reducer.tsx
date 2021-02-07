import {
    FETCH_REQUEST,
    FETCH_SUCCESS,
    FETCH_ERROR,
    CLEAR_CACHE_SUCCESS
  } from './actionType';

const initialState = {
    loading: false,
    repoList: [],
    error: '',
    cacheCleared: ''
};
const reducer = (state= initialState, action: any)=>{
    switch (action.type) {
        case FETCH_REQUEST:
            return {
                ...state,
                loading: true,
                error: '',
            };
        case FETCH_SUCCESS:
            return {
                ...state,
                loading: false,
                repoList: action.payload,
            };
        case FETCH_ERROR:
            return {
                ...state,
                loading: false,
                repoList: [],
                error: action.payload
            };
        case CLEAR_CACHE_SUCCESS:
            return {
                loading: false,
                repoList: [],
                error: '',
                cacheCleared: action.payload
            };
        default:
            return state;
    }
}

export default reducer;