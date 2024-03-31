import { Middleware, PayloadAction } from '@reduxjs/toolkit';
import browserHistory from '../../browser-history';
import { roootReducer } from '../root-reducer';

type Reducer = ReturnType<typeof roootReducer>;

const redirect: Middleware<unknown, Reducer> = () => (next) => (action: PayloadAction<string>) => {
  if (action.type === 'redirectToRoute') {
    browserHistory.push(action.payload);
  }

  return next(action);
};

export { redirect };
