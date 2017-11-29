import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import store from './models/UserStore';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App store={store} />, document.querySelector('#root'));
registerServiceWorker();
