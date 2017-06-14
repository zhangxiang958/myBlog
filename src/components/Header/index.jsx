import React    from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header id="header" className="header">
        <div id="mobile-navbar" className="mobile-navbar">
          <div className="mobile-header-logo">
            <Link to="/" className="logo">Shwan</Link>
          </div>
          <div className="mobile-navbar-icon">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className="logo-wrapper">
          <Link to="/" className="logo">Shawn</Link>
        </div>

        <nav className="site-navbar">          
            <ul id="menu" className="menu">             
                <li className="menu-item">
                  <Link className="menu-item-link" to="/">
                      Blog
                  </Link>
                </li>              
                <li className="menu-item">
                  <Link className="menu-item-link" to="/archives">
                      Archives
                  </Link>
                </li>
                <li className="menu-item">
                  <Link className="menu-item-link" to="/categories">
                      Categories
                  </Link>
                </li>
                <li className="menu-item">
                  <Link className="menu-item-link" to="/about">
                      About
                  </Link>
                </li>
            </ul>
        </nav>
    </header>
  );
}

export default Header;