'use strict';



import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import './css/main.css';
import './scss/main.scss';

ReactDOM.render(
    <App />,
    document.getElementById('root')
);


// import {Router, Router, hashHistory} from 'react-router'
//

//
//
// ReactDOM.render(
//     <Provider store="{store}">
//         <Router history={hashHistory}>
//             <Route path="/" component={App}/>
//         </Router>
//     </Provider>,
//     document.getElementById('root')
// );