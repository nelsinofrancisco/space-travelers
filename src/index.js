import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import store from './redux/configureStore';
import NavBar from './components/NavBar';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} />
    <NavBar />
  </React.StrictMode>,
  document.getElementById('root'),
);
