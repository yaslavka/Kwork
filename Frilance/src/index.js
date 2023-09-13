import React from 'react';
import ReactDOM from 'react-dom';
import isBetween from 'dayjs/plugin/isBetween';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import dayjs from 'dayjs';
import 'react-toastify/dist/ReactToastify.css';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ToastContainer } from 'react-toastify';

import * as serviceWorker from './serviceWorker';
import App from './App';
import configureStore, { history } from './config/store';
import './config/i18n';
import './index.scss';

dayjs.extend(isBetween);
dayjs.extend(timezone);
dayjs.extend(utc);
export const store = configureStore();

ReactDOM.render(
  <Provider store={store.store}>
    <PersistGate loading={null} persistor={store.persistor}>
      <React.StrictMode>
        <App history={history} />
        <ToastContainer />
      </React.StrictMode>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
reportWebVitals();
serviceWorker.unregister();
