import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { Dispatch, State } from '../types/state';
import { ApiRoute } from '../consts';
import { Offers } from '../types/offers';
import { initializeOffers, toggleLoading, updateOffers } from './actions';

const uploadOffers = createAsyncThunk<void, undefined, {dispatch: Dispatch; state: State; extra: AxiosInstance}>('uploadOffers', async (_arg, {dispatch, extra: api}) => {
  dispatch(toggleLoading());
  const { data } = await api.get<Offers>(ApiRoute.Offers);
  dispatch(initializeOffers({offers: data}));
  dispatch(updateOffers());
  dispatch(toggleLoading());
});


export {
  uploadOffers
};


