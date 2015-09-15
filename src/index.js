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
