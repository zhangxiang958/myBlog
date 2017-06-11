import React from 'react';

const Header = () => {
  return (
    <header id="header" className="header">
        <div id="mobile-navbar" className="mobile-navbar">
          <div className="mobile-header-logo">
            <a href="/hexo-theme-even/." className="logo">Shwan</a>
          </div>
          <div className="mobile-navbar-icon">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className="logo-wrapper">
          <a href="/hexo-theme-even/." className="logo">Shawn</a>
        </div>

        <nav className="site-navbar">          
            <ul id="menu" className="menu">             
                <li className="menu-item">
                  <a className="menu-item-link" href="/hexo-theme-even/">
                      Blog
                  </a>
                </li>              
                <li className="menu-item">
                  <a className="menu-item-link" href="/hexo-theme-even/archives/">
                      Archives
                  </a>
                </li>
                <li className="menu-item">
                  <a className="menu-item-link" href="/hexo-theme-even/archives/">
                      About
                  </a>
                </li>
            </ul>
          
        </nav>

    </header>
  );
}

export default Header;