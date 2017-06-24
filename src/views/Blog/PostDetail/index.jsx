import React from 'react';
import 'whatwg-fetch';

class PostDetail extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      postDetail: {
        __html: ''
      }
    }
  }

  fetchArticle(){

      fetch('http://localhost:8080/')
      .then(function(response){

          return response.text();
      })
      .then((body) => {

          this.setState({
              postDetail: {
                  __html: body
              }
          });
      });
  }
  
  componentDidMount(){
    this.fetchArticle();
  }

  render(){
    return (
      <div>
        <div dangerouslySetInnerHTML={ this.state.postDetail } />
        fuck
      </div>
    );
  }
}

export default PostDetail;