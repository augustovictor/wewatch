import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';

import reducers from './reducers';
import Navbar from './components/Navbar';

import './index.css';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
<Provider store={ createStoreWithMiddleware(reducers) }>
    <Navbar />
</Provider>
, document.getElementById('root'));
registerServiceWorker();
