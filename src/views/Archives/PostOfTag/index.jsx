import React          from 'react';
import Content        from '../../../components/Content/index.jsx';
import ArchivesTitle  from '../../../components/ArchivesTitle/index.jsx';
import PostDesc       from '../../../components/PostDesc/index.jsx';

const PostOfTag = ({ match }) => {
  return (
    <Content>
        <section id="archive" className="archive">
            <div className="archive-title">
              <ArchivesTitle title={match.params.tag} />
              <PostDesc time="2017.06.09" postTitle="hello world"/>
            </div>
        </section>
    </Content>
  );
}

export default PostOfTag;