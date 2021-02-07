import {Switch, Route, Link} from 'react-router-dom';
import Search from '../pages/search';
import ClearCache from '../pages/clear-cache';
import PageNotFound from '../pages/page-not-found';
import Layout from './layout';
import './header.css'

/**
 * Header component handles routes in application
 * layout component takes the component and displays it.
 * header.css : css realated to header i.e nav, ul li etc.
 */
const Header = () => {
    return (
        <>
        <div className='header-container'>
            <nav className="nav-container">
                <ul className="nav-ul-container">
                    <li><Link to='/'> Search </Link></li>
                    <li><Link to='/clear-cache'> Clear Cache </Link></li>
                </ul>
            </nav>
        </div>
        <Layout>
            <Switch>
                <Route exact path='/' component={Search}/>
                <Route path='/clear-cache' component={ClearCache}/>
                <Route component={PageNotFound}/>
            </Switch>
        </Layout>
        </>
    )
}
export default Header;