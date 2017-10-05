'use strict';

import React, { Component } from 'react';


class Dropdown extends Component{
    render(){
        constructor(props){
            super(props);
            this.state = { isOpened: false };
        }

        toggleState(){
            this.toggleState({isOpened: !this.state.isOpened});
        }

        return <div onclick={this.toggleState}>Its drop down</div>
    }
}


export  default Dropdown;