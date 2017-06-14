import React    from 'react';
import { Link } from 'react-router-dom';

const Tags = () => {
  return (
    <Link className="category-link" to="/categories/哲学/">
      哲学
      <span className="category-count">1</span>
    </Link>
  );
}

export default Tags;