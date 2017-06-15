import React from 'react';

const Pagination = () => {
  return (
    <nav className="pagination">
      <a className="prev" href="/">
        <i className="iconfont icon-left"></i>
        <span className="prev-text">Prev</span>
      </a>
       <a className="next" href="/page/2/">
        <span className="next-text">Next</span>
        <i className="iconfont icon-right"></i>
      </a>
    </nav>
  );
}

export default Pagination;