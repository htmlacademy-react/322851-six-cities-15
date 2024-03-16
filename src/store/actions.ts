import { createAction } from '@reduxjs/toolkit';
import { Offers } from '../types/offers';
import { SortBy } from '../consts';


const changeCity = createAction<{city: string}>('changeCity');
const changeSortBy = createAction<{sortBy: SortBy}>('changeSortBy');
const updateOffers = createAction('uploadOffers');
const initializeOffers = createAction<{offers: Offers}>('initializeOffers');
const toggleLoading = createAction('toggleLoading');


export {
  changeCity,
  updateOffers,
  changeSortBy,
  initializeOffers,
  toggleLoading
};
