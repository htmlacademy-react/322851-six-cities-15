import { createAction } from '@reduxjs/toolkit';
import { AppRoute, SortBy } from '../consts';


const changeCity = createAction<{city: string}>('changeCity');
const changeSortBy = createAction<{sortBy: SortBy}>('changeSortBy');
const redirectToRoute = createAction<AppRoute>('redirectToRoute');

export {
  changeCity,
  changeSortBy,
  redirectToRoute
};
