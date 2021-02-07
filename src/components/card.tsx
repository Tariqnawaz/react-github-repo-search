import CardModel from '../model/cardModel';
import './card.css'

/**
 * Card component takes props related to users or repositories & displays 
 * card.css handles css related to card
 */
const Card = (props: any) => {
    const users: CardModel = props.data;
    return (
        <div key={users?.id} className='card-model-container'>
        {users?.profile_pic && <div>
            {/* <span className='card-label'>Picture: </span> */}
            <a href={users?.profile_link} target='_blank | undefined'>
                <img className='card-model-img' src={users?.profile_pic} alt={users?.name}/>
            </a>
            {/* {users?.profile_pic} */}
        </div>}

        {users?.name && <div><span className='card-label'>Name: </span>{users?.name}</div>}
        {users?.full_name && <div><span className='card-label'>Full name: </span>{users?.full_name}</div>}
        {users?.location && <div><span className='card-label'>Location: </span>{users?.location}</div>}
        {users?.description && <div><span className='card-label'>Description: </span>{users?.description}</div>}
        {/* {users?.profile_link && <div><span className='card-label'>Profile URL: </span>{users?.profile_link}</div>}
        {users?.profile_pic && <div><span className='card-label'>Picture: </span>{users?.profile_pic}</div>} */}
        {users?.public_repos && <div><span className='card-label'>Repositories: </span>{users?.public_repos}</div>}
        {users?.following>0 && <div><span className='card-label'>Followers: </span>{users?.followers}</div>}
        {users?.following>0 && <div><span className='card-label'>Following: </span>{users?.following}</div>}
        {users?.star>0 && <div><span className='card-label'>Star: </span>{users?.star}</div>}
        {users?.forks>0 && <div><span className='card-label'>Forks: </span>{users?.forks}</div>}
        {users?.open_issues>0 && <div><span className='card-label'>Open Issue:</span> {users?.open_issues}</div>}
    </div>
    )
}

export default Card;