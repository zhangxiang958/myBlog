import React      from 'react';
import Layout     from '../../components/Layout/index.jsx';
import Content    from '../../components/Content/index.jsx';
import PostItem   from '../../components/PostItem/index.jsx';
import Pagination from '../../components/Pagination/index.jsx';
import 'whatwg-fetch';
// import githubMarkdown from '../../static/css/github-markdown.css';
// import prism from '../../static/css/prism.css';
// import style from '../../static/css/style.css';

class Blog extends React.Component {
    constructor(...props){
        super(...props);

        this.state = {
            postDetail: {}
        }
    };
    
    fetchArticle(){

        fetch('http://localhost:8080/')
        .then(function(response){

            return response.text();
        })
        .then((body) => {
            let fuck = document.querySelector('.fuck');
            console.log(typeof body);
            // fuck.innerHTML = body;
            // this.setState({
            //     postDetail: {
            //         __html: body
            //     }
            // });
            return {
                __html: body
            };
        });
    }

    componentDidMount() {
        // this.fetchArticle();
    }

    render() {
        return (
            <Content>
                <section id="posts" className="posts">
                    <PostItem />
                </section>
                <div className="fuck" dangerouslySetInnerHTML={this.fetchArticle()} />
                <Pagination />
            </Content>
        );
    }
}

export default Blog;