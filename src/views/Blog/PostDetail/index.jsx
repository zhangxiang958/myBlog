import React          from 'react';
import PostHeader     from '../../../components/PostHeader/index.jsx';
import PostToc        from '../../../components/PostToc/index.jsx';
import CopyRight      from '../../../components/CopyRight/index.jsx';
import style          from '../../../static/sass/highlight/hightlight.scss';
import prism          from '../../../static/sass/highlight/prism.scss';
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
      <div id="content" className="content">
        <article className="post">
          <header className="post-header">
            <PostHeader />
            <PostToc />
          </header>
        </article>
        <div className="post-content" dangerouslySetInnerHTML={ this.state.postDetail } />
        <CopyRight />
        {/*<PostFooter />*/}
      </div>
    );
  }
}

export default PostDetail;