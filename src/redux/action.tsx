import axios from 'axios';
import {
    FETCH_REQUEST,
    FETCH_SUCCESS,
    FETCH_ERROR,
    CLEAR_CACHE_SUCCESS,
  } from './actionType';


export const fetchRequest = () => {
  return {
    type: FETCH_REQUEST,
  };
};

const fetchSuccess = (repoList: any) => {
  return {
    type: FETCH_SUCCESS,
    payload: repoList,
  };
};

const clearCacheSuccess = (message: string) => {
  return {
    type: CLEAR_CACHE_SUCCESS,
    payload: message,
  };
};

const fetchError = (error: any) => {
  return {
    type: FETCH_ERROR,
    payload: error,
  };
};

export const clearCache = ()=>{
  return (dispatch: any) => {
    try {
      dispatch(fetchRequest);
      axios.get(`http://localhost:3000/api/clear-cache/`)
      .then(response => {
          const message = response.data.data;
          dispatch(clearCacheSuccess(message));
      }).catch(error => {
          dispatch(fetchError(error.response.data.data));
      });
    } catch (error) {
      dispatch(fetchError('Fetch request failed'));
    }
  }
}

export const searchGitRepos = (props: any) => {
    const { searchInput, searchBy } = props;
    return (dispatch: any) => {
     dispatch(fetchRequest());
     try {
        axios
        .post(`http://localhost:3000/api/search/`, {
          searchInput,
          searchBy
        }) 
        .then(res => {
          dispatch(fetchSuccess(res.data));
        })
        .catch(err => {
          dispatch(fetchError(err.response.data.data));
        });
     } catch (error) {
      dispatch(fetchError('Fetch request failed'));
     }
    };
  };

export default fetchRequest;
