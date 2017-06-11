import React    from 'react';
import Header   from '../Header/index.jsx';
import Footer   from '../Footer/index.jsx';
import BackTop  from '../BackTop/index.jsx'

let mainStyle = {
  margin: '0 auto',
  width: '800px'
}

const Layout = ({children}) => {
  return (
    <div className="main" style={ mainStyle }>
        <Header />
        <div className="content">
          {children}
        </div>
        <Footer />
        <BackTop />
    </div>
  );
}

export default Layout;