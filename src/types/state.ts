import { AuthorizationStatus, SortBy } from '../consts';
import { store } from '../store';
import { DetailedOffer, Offers } from './offers';
import { Reviews } from './reviews';

export type MainProcess = {
  city: string;
  initialOffers: null| Offers;
  offers: null | Offers;
  sortBy: SortBy;
  isLoading: boolean;
};

export type OfferProcess = {
  currentOffer: null | DetailedOffer;
  nearbyOffers: null | Offers;
  reviews: null | Reviews;
}


export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
}

export type State = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;
