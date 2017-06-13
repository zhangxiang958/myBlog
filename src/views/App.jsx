import React    from 'react';
import Layout   from '../components/Layout/index.jsx';

class App extends React.Component {
  constructor(...props){
    super(...props);
  }

  render(){
    return (
      <Layout>
          { this.props.children }
      </Layout>
    );
  }
}

export default App;