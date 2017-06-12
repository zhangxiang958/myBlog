import React    from 'react';
import ReactDOM from 'react-dom';
import Style    from './static/sass/style.scss';
import Router   from './router/router.js';

ReactDOM.render(
    Router,
    document.getElementById('app')
);