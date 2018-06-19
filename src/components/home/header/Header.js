import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import './style.css';
import {Link} from 'react-router';

const Header = (props) => {
    const {cartItems, getSum } = props;

    return(
        <div className="page-header" id="page-header">
            <h3>Total Cost:{getSum(cartItems)} Number of Items:{cartItems.length}
            <Link to="/cart">
                  <span>
                    <img id="shoppingCartImage" src="https://res.cloudinary.com/sivadass/image/upload/v1493548928/icons/bag.png" />
                  </span>
            </Link>
            </h3>
        </div>
    );
};

Header.propTypes = {
    cartItems : React.PropTypes.array.isRequired,
    getSum : React.PropTypes.func.isRequired
};

export default Header;