import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import stores from './redux.index.js';
import App from './app';

const render = () => {
  ReactDOM.render(<App store={stores.counter} />,document.getElementById('root'));
}

render();
stores.counter.subscribe(render);
