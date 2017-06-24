import React          from 'react';
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
            <h1 className="post-title">
              fuck
            </h1>
            <div className="post-meta">
              <span className="post-time">
                2017年3月22日
              </span>
            </div>
          </header>
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
        </article>
        <div className="post-content" dangerouslySetInnerHTML={ this.state.postDetail } />
        <CopyRight />
        {/*<PostFooter />*/}
      </div>
    );
  }
}

export default PostDetail;