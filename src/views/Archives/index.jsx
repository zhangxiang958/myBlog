import React          from 'react';
import Content        from '../../components/Content/index.jsx';
import ArchivesOfYear from '../../components/ArchivesOfYear/index.jsx';
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
              <ArchivesOfYear />
              <PostDesc />
            </div>
        </section>
      </Content>
    );
  }
}

export default Archives;