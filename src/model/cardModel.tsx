/**
 * Maps the users & repositories response data to this interface
 */
interface  CardModel {
    'id': number,
    'name': string;
    'profile_link': string,
    'profile_pic': string,
    'location': string,
    'public_repos': string,
    'followers': number,
    'following': number,
    'full_name': string,
    'description': string,
    'star': number,
    'forks': number,
    'open_issues': number,
}
export default CardModel;