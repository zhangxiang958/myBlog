import React      from 'react';
import Layout     from '../components/Layout/index.jsx';
import Content    from '../components/Content/index.jsx';
import PostItem   from '../components/PostItem/index.jsx';
import Pagination from '../components/Pagination.index.jsx'

class Blog extends React.Component {
    constructor(...props){
        super(...props);
    };
    
    fetchArticle(){

    }

    render() {
        return (
            <Layout>
                <Content>
                    <div>
                        this is content
                        <PostItem />
                    </div>
                    <Pagination />
                </Content>
            </Layout>  
        );
    }
}

export default Blog;