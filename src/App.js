'use strict';
import React, { Component } from 'react';
import { connect } from 'react-redux'
import  Dropdown from  './Dropdown';

// import RegistrationForm from './RegistrationForm';

// import './scss/App.scss';

// import Header from './Header';
//
// const menu = [
//     {
//         link: '/acticles',
//         label: 'Articles'
//     },
//     {
//         link: '/contacts',
//         label: 'Contacts'
//     },
//     {
//         link: '/posts',
//         label: 'Posts'
//     },
// ];

class App extends Component{
addTrack(){
    this.props.onAddTrack(this.trackInput.value);
    this.trackInput.value='';
}
    render(){
        return (
            <div>
                <input type="text" ref={(input) => {this.trackInput = input}} />
                <button onClick={this.addTrack.bind(this)}>Add track</button>
                <ul>
                    {this.props.tracks.map((track, index) =>
                        <li key={index}>{track}</li>
                    )}
                </ul>
            </div>
        );
    }
}

export default connect(
    state => ({
        tracks: state.tracks
    }),
    dispatch => ({
        onAddTrack: (trackName) => {
            dispatch({ type: 'ADD_TRACK', payload: trackName });
        }
    })
)(App);