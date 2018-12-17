import React from 'react';
import { Provider } from 'react-redux';
import store from '../store/configureStore';
import App from './App';

export default () => (
    <Provider store={store}>
        <App />
    </Provider>
);
