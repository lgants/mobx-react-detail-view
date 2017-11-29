import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import store from './models/UserStore';
import { Provider } from 'mobx-react';
import registerServiceWorker from './registerServiceWorker';



ReactDOM.render(
  <Provider store={store}>
      <App store={store} />
  </Provider>,
  document.querySelector('#root')
);
registerServiceWorker();
