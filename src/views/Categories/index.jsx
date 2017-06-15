import React    from 'react';
import PostTag  from '../../components/PostTag/index.jsx';

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
          <PostTag url={this.props.match.url} tagName="fuck" postAmount="1300" />
        </div>
      </div>
    );
  }
}

export default Categories;