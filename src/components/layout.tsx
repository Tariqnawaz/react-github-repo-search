import {ReactNode} from 'react';
import './layout.css';

interface IProps {
    children: ReactNode;
}

/**
 * Layout component maintain layout for all component in application
 */
const Layout = ({children}: IProps) => {
    return (
        <div className='layout-container'>
            <main>{children}</main>
        </div>
    )
}

export default Layout;