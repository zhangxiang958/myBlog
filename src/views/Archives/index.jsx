import React          from 'react';
import Content        from '../../components/Content/index.jsx';
import ArchivesTitle  from '../../components/ArchivesTitle/index.jsx';
import PostDesc       from '../../components/PostDesc/index.jsx';

class Archives extends React.Component {
  constructor(...props) {
    super(...props);
  }
  render() {
    return (
      <Content>
        <section id="archive" className="archive">
            <div className="archive-title">
              <h2 className="archive-name"> All </h2>
              <span className="archive-post-counter">
                <span> 2 </span>
                 Posts In Total
              </span>
              <ArchivesTitle title="2017"/>
              <PostDesc time="2017.06.09" postTitle="hello world"/>
            </div>
        </section>
      </Content>
    );
  }
}

export default Archives;