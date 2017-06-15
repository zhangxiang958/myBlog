import React from 'react';

const ArchivesTitle = ({ title }) => {
  return (
      <div className="collection-title">
        <h2 className="archive-year">{title}</h2>
      </div>
  );
}

export default ArchivesTitle;