import {createReducer} from '@reduxjs/toolkit';
import { addNewReview, changeCity, changeSortBy, initializeOffers, setCurrentOffer, setNearbyOffers, setReviews, toggleLoading, updateAuthorization, updateOffers } from './actions';
import { AuthorizationStatus, DEFAULT_CITY, SortBy } from '../consts';
import { sortAndFilterOffers } from '../utils';
import { DetailedOffer, Offers } from '../types/offers';
import { Reviews } from '../types/reviews';

type InitialState = {
  city: string;
  initialOffers: null| Offers;
  offers: null | Offers;
  sortBy: SortBy;
  isLoading: boolean;
  authorizationStatus: AuthorizationStatus;
  currentOffer: null | DetailedOffer;
  nearbyOffers: null | Offers;
  reviews: null | Reviews;
};

const initialState: InitialState = {
  city: DEFAULT_CITY,
  initialOffers: null,
  offers: null,
  sortBy: SortBy.Popular,
  isLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  currentOffer: null,
  nearbyOffers: null,
  reviews: null
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload.city;
    })
    .addCase(updateOffers, (state) => {
      if (state.initialOffers) {
        state.offers = sortAndFilterOffers(state.city, state.sortBy, state.initialOffers);
      }
    })
    .addCase(changeSortBy, (state, action) => {
      state.sortBy = action.payload.sortBy;
    })
    .addCase(initializeOffers, (state, action) => {
      state.initialOffers = action.payload.offers;
    })
    .addCase(toggleLoading, (state) => {
      state.isLoading = !state.isLoading;
    })
    .addCase(updateAuthorization, (state,action) => {
      state.authorizationStatus = action.payload.authorizationStatus;
    })
    .addCase(setCurrentOffer, (state,action) => {
      state.currentOffer = action.payload;
    })
    .addCase(setNearbyOffers, (state,action) => {
      state.nearbyOffers = action.payload;
    })
    .addCase(setReviews, (state,action) => {
      state.reviews = action.payload;
    })
    .addCase(addNewReview, (state, action) => {
      if (state.reviews) {
        state.reviews.push(action.payload);
      } else {
        state.reviews = [action.payload];
      }
    });
});

export { reducer } ;
