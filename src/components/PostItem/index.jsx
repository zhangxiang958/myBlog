import React    from 'react';
import { Link } from 'react-router-dom';

const PostItem = ({ url, postName, postID }) => {
  return (
    <article className="post">
      <header className="post-header">
          <h1 className="post-title">
            <Link className="post-link" to={`/posts/${postName}`}>
                Hello world
            </Link>
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