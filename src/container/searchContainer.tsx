import {useRef} from 'react';
import {searchGitRepos} from '../redux/action';
import {connect, useDispatch} from 'react-redux';
import Card from '../components/card';
import './search.css';

/**
 * SearchContainer: is a redux container which maps the state & action with store for searching.
 * searchContainer: is a smart component which holds state from store
 * Card: is a dump component which takes props for displaying repositories details
 * css: search.css contains search & grid related css
 */
const SearchContainer = (props: any) => {
     const searchInput = useRef<HTMLInputElement>(null);
     const searchBy = useRef<HTMLSelectElement>(null);
     const dispatch = useDispatch();
     const {list} = props;
     const onInputChange = (event:any) =>{
        event.preventDefault();
        processReq();
    }

    const onSelectChange = (event:any) =>{
        event.preventDefault();
        processReq();
    }

    const processReq = () =>{
        if(searchInput.current?.value!==undefined&&
            searchInput.current?.value.length>=3){
            dispatch(searchGitRepos({
                'searchInput':searchInput.current?.value,
                'searchBy':searchBy.current?.value
            }));
        }
    }
    
    return (
        <>
            <div className={searchInput.current?.value!==undefined&&
                     searchInput.current?.value.length>=3 ? 
                    'search-box-container-sm': 'search-box-container-lg'}>
                <div className="search-input-box">
                    <input type='text' 
                        name='searchBox'
                        id='searchBox'
                        placeholder='start typing to search...'
                        onChange={onInputChange}
                        ref={searchInput}
                    />
                    <small>(min 3 character)</small>
                </div>
                <div className="search-drop-down">
                    <select name="searchType" id="searchType" ref={searchBy} onChange={onSelectChange}>
                        <option value="users">Users</option>
                        <option value="repositories">Repositories</option>
                    </select>
                </div>
            </div>
            {
                searchInput.current?.value!==undefined&&
                searchInput.current?.value.length>=3 && 
                list?.loading ? (<div className='loading-container'><h4>loading...</h4></div>) :
                list?.error ? (<div className='error-container'><h4>{list?.error}</h4></div>) :
                list?.repoList?.data?.length>0 && 
                <div className='card-container'>
                    {list.repoList.data.map((data: any) => {
                        return <Card key={data.id} data={data}/>
                    })}
                </div>
            }
        </>
    );
}

const mapStateToProps = (state: any) => {
    return {
      list: state,
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        search: (props: any) => {
            dispatch(searchGitRepos(props));
          }
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);