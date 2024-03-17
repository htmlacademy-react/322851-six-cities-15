import { createAction } from '@reduxjs/toolkit';
import { Offers } from '../types/offers';
import { AuthorizationStatus, SortBy } from '../consts';


const changeCity = createAction<{city: string}>('changeCity');
const changeSortBy = createAction<{sortBy: SortBy}>('changeSortBy');
const updateOffers = createAction('uploadOffers');
const initializeOffers = createAction<{offers: Offers}>('initializeOffers');
const toggleLoading = createAction('toggleLoading');
const updateAuthorization = createAction<{authorizationStatus: AuthorizationStatus}>('updateAuthorization');

export {
  changeCity,
  updateOffers,
  changeSortBy,
  initializeOffers,
  toggleLoading,
  updateAuthorization
};
