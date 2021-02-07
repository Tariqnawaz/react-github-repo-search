import {useEffect} from 'react';
import {clearCache} from '../redux/action';
import {connect, useDispatch} from 'react-redux';
import './search.css';

/**
 * ClearCacheContainer: is a redux container which maps the state & action for clearing cache data.
*/
const ClearCacheContainer = (props: any) =>{
    const dispatch = useDispatch();
    const {clearCacheStatus} = props;
    useEffect(()=>{
        dispatch(clearCache());
    },[dispatch])
    return(
        <>
            {
                clearCacheStatus?.loading ? (<div className='loading-container'><h4>loading...</h4></div>) :
                clearCacheStatus?.error ? (<div className='error-container'><h4>{clearCacheStatus?.error}</h4></div>) :
                clearCacheStatus?.cacheCleared && 
                <div className='clear-cache-container'>{clearCacheStatus.cacheCleared}</div>
            }
        </>
    );
}

const mapStateToProps = (state: any) => {
    return {
      clearCacheStatus: state,
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        clearsCacheData: dispatch(clearCache())
    };
  };

export default connect(mapStateToProps,mapDispatchToProps)(ClearCacheContainer);