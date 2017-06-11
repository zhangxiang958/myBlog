import React    from 'react';
import ReactDOM from 'react-dom';
import Style    from './static/sass/style.scss';
import Layout   from './components/Layout/index.jsx';

class App extends React.Component {
    constructor(...props){
        super(...props);
    };
    render() {
        return (
            <Layout>
                <div>
                    this is content
                </div>
            </Layout>  
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);