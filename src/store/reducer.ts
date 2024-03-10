import {createReducer} from '@reduxjs/toolkit';
import { changeCity, changeSortBy, uploadOffers } from './actions';
import { DEFAULT_CITY, SortBy } from '../consts';
import offers from '../mocks/offers';

const initialState = {
  city: DEFAULT_CITY,
  initialOffers: offers,
  offers: offers.filter((offer) => offer.city.name === DEFAULT_CITY),
  sortBy: SortBy.Popular
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload.city;
    })
    .addCase(uploadOffers, (state, action) => {
      state.offers = action.payload.offers;
    })
    .addCase(changeSortBy, (state, action) => {
      state.sortBy = action.payload.sortBy;
    });
});

export { reducer } ;
