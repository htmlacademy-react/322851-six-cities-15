import { createAction } from '@reduxjs/toolkit';
import { DetailedOffer, Offers } from '../types/offers';
import { AppRoute, AuthorizationStatus, SortBy } from '../consts';
import { Reviews } from '../types/reviews';


const changeCity = createAction<{city: string}>('changeCity');
const changeSortBy = createAction<{sortBy: SortBy}>('changeSortBy');
const updateOffers = createAction('uploadOffers');
const initializeOffers = createAction<{offers: Offers}>('initializeOffers');
const toggleLoading = createAction('toggleLoading');
const updateAuthorization = createAction<{authorizationStatus: AuthorizationStatus}>('updateAuthorization');
const redirectToRoute = createAction<AppRoute>('redirectToRoute');
const setCurrentOffer = createAction<DetailedOffer>('setCurrentOffer');
const setNearbyOffers = createAction<Offers>('setNearbyOffers');
const setReviews = createAction<Reviews>('setReviews');

export {
  changeCity,
  updateOffers,
  changeSortBy,
  initializeOffers,
  toggleLoading,
  updateAuthorization,
  redirectToRoute,
  setCurrentOffer,
  setNearbyOffers,
  setReviews
};
