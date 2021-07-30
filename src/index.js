import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux'
import {createStore,applyMiddleware} from 'redux'
import rootReducer from './components/redux/reducers'
import thunk from 'redux-thunk'

const store=createStore(rootReducer,applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
     <App />
  </Provider>,
  document.getElementById('root')
);

