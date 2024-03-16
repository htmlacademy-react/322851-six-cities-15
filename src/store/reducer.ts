import {createReducer} from '@reduxjs/toolkit';
import { changeCity, changeSortBy, initializeOffers, toggleLoading, updateOffers } from './actions';
import { AuthorizationStatus, DEFAULT_CITY, SortBy } from '../consts';
import offers from '../mocks/offers';
import { sortAndFilterOffers } from '../utils';

const initialState = {
  city: DEFAULT_CITY,
  initialOffers: offers,
  offers: offers.filter((offer) => offer.city.name === DEFAULT_CITY),
  sortBy: SortBy.Popular,
  isLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload.city;
    })
    .addCase(updateOffers, (state) => {
      state.offers = sortAndFilterOffers(state.city, state.sortBy, state.initialOffers);
    })
    .addCase(changeSortBy, (state, action) => {
      state.sortBy = action.payload.sortBy;
    })
    .addCase(initializeOffers, (state, action) => {
      state.initialOffers = action.payload.offers;
    })
    .addCase(toggleLoading, (state) => {
      state.isLoading = !state.isLoading;
    });
});

export { reducer } ;
