import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image'

import { headerLink, logo } from './header.module.css';

const Header = () => {
    return (
        <div>
            <StaticImage className={logo} src="../images/icon.png" alt="My Awesome Website logo" />
            <Link className={headerLink} to="/">Strona główna</Link>
            <Link className={headerLink} to="/about">About</Link>
            <Link className={headerLink} to="/news-page">Nowości / Blog</Link>
        </div>
    );
};

export default Header;