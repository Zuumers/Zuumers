// TODO: Render the `App` component to the DOM
import ReactDOM from 'react-dom';
import React from 'react';
import App from './components/App/App.jsx';

import { createStore } from 'redux';
import allReducers from './reducers';
import { Provider } from 'react-redux'

const store = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('reviews')
);


// ReactDOM.render(<App />, document.getElementById('reviews')
// );