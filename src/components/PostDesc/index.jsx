import React from 'react';

const PostDesc = ({ time, postTitle }) => {
  return (
    <div className="archive-post">
      <span className="archive-post-time">
        
          { time }
        
      </span>
      <span className="archive-post-title">
        <a href="/hexo-theme-even/2017/06/08/hello-world/" className="archive-post-link">
          { postTitle }
        </a>
      </span>
    </div>
  );
}

export default PostDesc;