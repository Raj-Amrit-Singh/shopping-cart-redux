import React from 'react';
import ReactDOM, {render} from 'react-dom';
import configureStore from './components/store/configureStore';
import {Provider} from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import { getItemsList } from '../src/components/actions/dataActions';

const store = configureStore();

render(
  <Provider store={store}>
      <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);