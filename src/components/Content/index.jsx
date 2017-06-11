import React from 'react';

const Content = ({children}) => {
  return (
    <main id="main" className="main">
        <div className="content-wrapper">
          <div id="content" className="content">
            { children }
          </div>
        </div>  
    </main>
  );
}

export default Content;