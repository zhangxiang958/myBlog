import React    from 'react';
import { Link } from 'react-router-dom';

const Tags = ({ url, tagName, postAmount }) => {
  return (
    <Link className="category-link" to={`${url}/${tagName}`}>
        { tagName }
      <span className="category-count">
        { postAmount }
      </span>
    </Link>
  );
}

export default Tags;