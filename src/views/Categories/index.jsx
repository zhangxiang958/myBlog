import React from 'react';
import PostTag from '../../components/PostTag/index.jsx';

class Categories extends React.Component {
  constructor() {
    super();
  }



  render(){
    return (
      <div className="categories">
        <div className="categories-title">
          目前共计 
          <span> - </span> 
          个分类
        </div>
        <div className="categories-tags">
          <PostTag />
        </div>
      </div>
    );
  }
}

export default Categories;