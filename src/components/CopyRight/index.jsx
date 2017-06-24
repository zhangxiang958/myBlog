import React from 'react';

const CopyRight = () => {
  return (
    <div className="post-copyright">
      <p className="copyright-item">
        <span>作者: </span>
        <span>vinurs</span>
      </p>
      <p className="copyright-item">
        <span>来源: </span>
        <a href="https://vinurs.me">https://vinurs.me</a>
      </p>
      <p className="copyright-item">
        <span>链接: </span>
        <a href="https://vinurs.me/2017/03/22/mac-computer/">https://vinurs.me/2017/03/22/mac-computer/</a>
      </p>

      <p className="copyright-item lincese">
        
        本文采用<a rel="license" href="http://creativecommons.org/licenses/by-nc/4.0/" target="_blank">知识共享署名-非商业性使用 4.0 国际许可协议</a>进行许可
      </p>
    </div>
  );
}

export default CopyRight;