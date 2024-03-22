import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { Dispatch, State } from '../types/state';
import { ApiRoute, AppRoute, AuthorizationStatus } from '../consts';
import { DetailedOffer, Offers } from '../types/offers';
import { initializeOffers, redirectToRoute, setCurrentOffer, setNearbyOffers, setReviews, toggleLoading, updateAuthorization, updateOffers } from './actions';
import { dropToken, saveToken } from '../services/token';
import { AuthData, UserData } from '../types/auth';
import { Reviews } from '../types/reviews';

const uploadOffers = createAsyncThunk<void, undefined, {dispatch: Dispatch; state: State; extra: AxiosInstance}>('uploadOffers', async (_arg, {dispatch, extra: api}) => {
  dispatch(toggleLoading());
  const { data } = await api.get<Offers>(ApiRoute.Offers);
  dispatch(initializeOffers({offers: data}));
  dispatch(updateOffers());
  dispatch(toggleLoading());
});

const checkAuthorization = createAsyncThunk<void, undefined, {dispatch: Dispatch; state: State; extra: AxiosInstance}>('checkAuthorization', async (_arg, {dispatch, extra: api}) => {
  try {
    await api.get(ApiRoute.Login);
    dispatch(updateAuthorization({authorizationStatus: AuthorizationStatus.Auth}));
  } catch {
    dispatch(updateAuthorization({authorizationStatus: AuthorizationStatus.NoAuth}));
  }
});

const loginUser = createAsyncThunk<void, AuthData, {dispatch: Dispatch; state: State; extra: AxiosInstance}>('loginUser', async ({ email, password }, {dispatch, extra: api}) => {
  try {
    const {data: { token } } = await api.post<UserData>(ApiRoute.Login, {email, password});
    saveToken(token);
    dispatch(updateAuthorization({authorizationStatus: AuthorizationStatus.Auth}));
    dispatch(redirectToRoute(AppRoute.Main));
  } catch {
    dispatch(updateAuthorization({authorizationStatus: AuthorizationStatus.NoAuth}));
  }
});

const logoutUser = createAsyncThunk<void, undefined, {dispatch: Dispatch; state: State; extra: AxiosInstance}>('logoutUser', async (_arg, {dispatch, extra: api}) => {
  await api.delete(ApiRoute.Logout);
  dropToken();
  dispatch(updateAuthorization({authorizationStatus: AuthorizationStatus.NoAuth}));

});


const uploadOfferById = createAsyncThunk<void, string, {dispatch: Dispatch; state: State; extra: AxiosInstance}>('uploadOfferInfoById', async (offerId, { dispatch, extra: api}) => {
  const { data } = await api.get<DetailedOffer>(`${ApiRoute.Offers}/${offerId}`);
  dispatch(setCurrentOffer(data));
});

const uploadNearbyOffers = createAsyncThunk<void, string, {dispatch: Dispatch; state: State; extra: AxiosInstance}>('uploadOfferById', async (offerId, { dispatch, extra: api}) => {
  const { data } = await api.get<Offers>(`${ApiRoute.Offers}/${offerId}/nearby`);
  dispatch(setNearbyOffers(data));
});

const uploadReviews = createAsyncThunk<void, string, {dispatch: Dispatch; state: State; extra: AxiosInstance}>('uploadReviews', async (offerId, { dispatch, extra: api}) => {
  const { data } = await api.get<Reviews>(`${ApiRoute.Comments}/${offerId}`);
  dispatch(setReviews(data));
});


export {
  uploadOffers,
  checkAuthorization,
  loginUser,
  logoutUser,
  uploadOfferById,
  uploadNearbyOffers,
  uploadReviews
};


