import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, Setting } from '../../consts';
import { uploadNearbyOffers, uploadNewReview, uploadOfferById, uploadReviews } from '../thunk-actions';
import { OfferProcess } from '../../types/state';
import { getRandomSubArray } from '../../utils';

const initialState: OfferProcess = {
  nearbyOffers: null,
  currentOffer: null,
  reviews: null
};


const offerProcess = createSlice({
  name: NameSpace.OFFER,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(uploadOfferById.fulfilled, (state, action) => {
        if (action.payload) {
          state.currentOffer = action.payload;
        }
      })
      .addCase(uploadNearbyOffers.fulfilled, (state, action) => {
        state.nearbyOffers = getRandomSubArray(action.payload, Setting.NearbyOffersCount);
      })
      .addCase(uploadReviews.fulfilled, (state, action) => {
        state.reviews = action.payload;
      })
      .addCase(uploadNewReview.fulfilled, (state, action) => {
        if (state.reviews) {
          state.reviews = [...state.reviews, action.payload];
        } else {
          state.reviews = [action.payload];
        }
      });
  },
});

export { offerProcess };
