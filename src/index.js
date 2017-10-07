'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';

// import {React, Router, hashHistory} from 'react-router';

import './css/main.css';
import './scss/main.scss';

// const initialState=[
//         'Smells like spirit',
//         'Enter Sandman'
//     ];

const initialState= {

    tracks: [
        'Smells like spirit',
        'Enter Sandman'
    ],
    playlist: [
        'home',
        'work'
    ]
};


function playlist(state = initialState, action) {
    if (action.type === 'ADD_TRACK') {
        return {
            ...state,
            tracks: [...state.tracks, action.payload]
        };
    }
    return state;
}

const store = createStore(playlist, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
