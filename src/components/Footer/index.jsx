import React from 'react';

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="social-links">
        <a href="mailto:your@email.com" className="iconfont icon-email" title="email"></a>
        <a href="/hexo-theme-even/atom.xml" className="iconfont icon-github" title="github"></a>        
        <a href="/hexo-theme-even/atom.xml" className="iconfont icon-zhihu" title="zhihu"></a>        
        <a href="/hexo-theme-even/atom.xml" className="iconfont icon-rss" title="rss"></a>
      </div>

      <div className="copyright">
        <span className="power-by">
          Powered by <a className="hexo-link" href="https://hexo.io/">Hexo</a>
        </span>
        
        <span className="theme-info">
          Theme - 
          <a className="theme-link" href="https://github.com/ahonn/hexo-theme-even">Even</a>
        </span>

        <span className="copyright-year">
          © 2015 - 2017
          <span className="heart">
            <i className="iconfont icon-heart"></i>
          </span>
          <span className="author">Ahonn</span>
        </span>
      </div>
    </footer>
  );
}

export default Footer;