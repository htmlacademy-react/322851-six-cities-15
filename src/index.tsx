import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import offers from './mocks/offers';
import { Provider } from 'react-redux';
import { store } from './store';
import { uploadOffers } from './store/thunk-action';

store.dispatch(uploadOffers());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App offers = { offers } />
    </React.StrictMode>
  </Provider>
);
