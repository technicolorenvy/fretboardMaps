import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { Provider } from 'react-redux';
import reducers from './redux/reducers';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import * as serviceWorker from './serviceWorker';

let middlewares = [thunkMiddleware],
    store;

if ( process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

store = createStore(reducers, applyMiddleware.apply(this, middlewares));

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
