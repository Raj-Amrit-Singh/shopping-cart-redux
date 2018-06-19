import React from 'react';
import {Route, IndexRoute} from 'react-router';
import HomePage from './components/home/HomePage';
import { CartPage }  from './components/cart/CartPage';
import App from './components/App';
import configureStore from './components/store/configureStore';

export default(
    <Route exact path="/" component={App}>
        <IndexRoute component={HomePage} />
        <Route exact path="/cart" component={CartPage}/>
    </Route>
);