import React from 'react';
import ReactDOM from 'react-dom';
import Style from './static/css/main.css';

class App extends React.Component {
    constructor(...props){
        super(...props);
    };
    static propTypes = {
        autoPlay: React.PropTypes.bool
    };
    render() {
        return (
            <div>
                'hello world'
            </div>    
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);