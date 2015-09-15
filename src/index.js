import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from './reducer';
import { App } from './App';

const store = createStore(reducer);

React.render((
  <Provider store={store}>
    {() => <App />}
  </Provider>
), document.getElementById('root'));

if (module.hot) {
  // Enable Webpack hot module replacement for reducers
  module.hot.accept('./reducer', () => {
    const {reducer: nextReducer} = require('./reducer');
    store.replaceReducer(nextReducer);
  });
}
