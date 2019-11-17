import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";

import reducers from './reducers';

import App from './App';


let store;

if (window.navigator.userAgent.includes("chrome")) {
  console.log("chrome");
  store = createStore(reducers,
    compose(
      applyMiddleware(thunk),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );
} else {
  console.log("not chrome");
   store = createStore(
    reducers,
    applyMiddleware(thunk)
  );
}

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);


