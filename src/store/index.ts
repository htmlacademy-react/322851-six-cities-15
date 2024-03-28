import { configureStore } from '@reduxjs/toolkit';
import { createAPI } from '../services/api';
import { redirect } from './middleware/redirect';
import { roootReducer } from './root-reducer';

const api = createAPI();

const store = configureStore({
  reducer: roootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api
      }
    }
    ).concat(redirect),
});

export { store };
