import React from 'react';
import {Link} from 'react-router';

export class CartPage extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <div className="panel panel-default">
                    <div className="panel-heading"> <Link to="/">Back To Shopping</Link></div>
                </div><br />
                <div className="container">
                    <div className="jumbotron">
                        <table className="table">
                          <thead><tr><th></th><th>Number of item</th><th>Name Of item</th><th>Price</th></tr></thead>
                          <tbody>{this.currentCart}</tbody>
                        </table>
                        <div id="totalPrice"><h4><b>Total Price :</b></h4></div>
                    </div>
                </div>
            </div>
        );
    }
}

import { connect } from 'react-redux';