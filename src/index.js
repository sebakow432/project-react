import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from 'react-redux';
import store from './Redux/store';
import App from './App';
import './styles/normalize.scss';
import './styles/global.scss';
import 'font-awesome/css/font-awesome.min.css';


ReactDOM.createRoot( document.getElementById('root')).render(
<React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
</React.StrictMode>);

