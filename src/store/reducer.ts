import {createReducer} from '@reduxjs/toolkit';
import { changeCity, uploadOffers } from './actions';
import { DEFAULT_CITY } from '../consts';
import offers from '../mocks/offers';

const initialState = {
  city: DEFAULT_CITY,
  offers: offers.filter((offer) => offer.city.name === DEFAULT_CITY)
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload.city;
    })
    .addCase(uploadOffers, (state, action) => {
      state.offers = action.payload.offers;
    });
});

export { reducer } ;
