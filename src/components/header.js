import React from 'react'
import { Link } from 'gatsby';

const Header = () => {
    return (
        <header>
            <h1 className='title'><Link to='/'>Jorge Machado</Link></h1>
            <nav>
                <ul className='nav-list'>
                    <li className='nav-item'>
                        <Link to='/'>Home</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/blog'>Blog</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/about'>About Us</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/contact'> contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;