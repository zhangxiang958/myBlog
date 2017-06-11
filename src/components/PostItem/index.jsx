import React from 'react';

const PostItem = () => {
  return (
    <article className="post">
      <header className="post-header">
          <h1 className="post-title">
            <a href="" className="post-link">
              Hello world
            </a>
          </h1>
          <div className="post-meta">
            <span className="post-time">
              8/2017
            </span>
          </div>
      </header>
      <div className="post-content">
        hello world hello world hello world
        hello world hello world hello world
      </div>
    </article>
  );
};

export default PostItem;