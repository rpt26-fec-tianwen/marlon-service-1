import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx'
import {getProduct, getProductType} from './utils/axiosRequests.js'

const root = document.getElementById('root');
ReactDOM.render(<App getProduct={getProduct} getProductType={getProductType}/>, root);
