import React from 'react';

export class CartPage extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="container">
            <h1>This is cart page</h1>
            </div>
        );
    }
}

import { connect } from 'react-redux';