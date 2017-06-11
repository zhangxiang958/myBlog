import React    from 'react';
import Layout   from '../components/Layout/index.jsx';

class App extends React.Component {
  render(){
    return (
      <Layout>
          { this.props.chidlren }
      </Layout>
    );
  }
}

export default App;