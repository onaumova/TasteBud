import React from 'react';
import {render} from 'react-dom';
import App from './components/App.jsx'
import store from './store.js';
import { Provider } from 'react-redux';
import styles from './public/index.css'

render (
    <Provider store={store}>
    <App/>
    </Provider>,
    document.getElementById('contents')
)