import React from 'react';

const PostToc = () => {
  return (
    <div className="post-toc" id="post-toc">
      <h2 className="post-toc-title">文章目录</h2>
      <div className="post-toc-content">
        <ol className="toc">
          <li className="toc-item toc-level-2">
            <a className="toc-link" href="#org2694d70">
              <span className="toc-text">1 硬件配置</span>
            </a>
            <ol className="toc-child">
              <li className="toc-item toc-level-3">
                <a className="toc-link" href="#org6c46d68">
                  <span className="toc-text">1.1 CPU</span>
                </a>
              </li>
              <li className="toc-item toc-level-3">
                <a className="toc-link" href="#orgdd0a300"><span className="toc-text">1.2 SSD</span>
                </a>
              </li>
            </ol>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default PostToc;