import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import store from './models/UserStore';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App store={store} />, document.querySelector('.container'));
registerServiceWorker();
