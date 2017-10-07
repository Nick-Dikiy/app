'use strict';

import React, { Component } from 'react';


class Dropdown extends Component{
    constructor(props){
        super(props);
        this.state = { isOpened: false };
    }

    toggleState() {
        this.setState({ isOpened: !this.state.isOpened });
    }

    render(){
        console.log('isOp ', this.state.isOpened);
        let dropDownText;
        if ( this.state.isOpened ){
            dropDownText = <div>lkadjf</div>;
        }
        return <div onClick={this.toggleState.bind(this)}>
            Its drop down
            {dropDownText}
        </div>;
    }
}


export  default Dropdown;