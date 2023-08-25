import './globals'
import 'react-app-polyfill/ie11'; // For IE 11 support
import 'react-app-polyfill/stable';
import 'core-js';
import './polyfill'
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { LoaderProvider } from "./context/LoaderProvider"
import { PromptProvider } from "./context/PromptProvider"
import { icons } from './assets/icons'

import { Provider } from 'react-redux'
import store from './store/store'
import { registerLicense } from '@syncfusion/ej2-base';
import { AuthProvider } from './context/AuthProvider';


registerLicense(process.env.REACT_APP_SYNCFUSSION_LICENSE);


React.icons = icons

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <Provider store={store}>
        <LoaderProvider>
          <PromptProvider>
          <App />
          </PromptProvider>
          
        </LoaderProvider>

      </Provider>
    </AuthProvider>

  </React.StrictMode>,
  document.getElementById('root')
);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import { registerLicense } from '@syncfusion/ej2-base';

// // Registering Syncfusion license key
// registerLicense('License Key');

// ReactDOM.render(
//   <Provider store={store}>
//   <App/>
// </Provider>,
// document.getElementById('root')
// );

