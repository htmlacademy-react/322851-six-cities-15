import { NameSpace } from '../../consts';
import { State } from '../../types/state';

const getInitialOffers = (state: Pick<State, NameSpace.OFFERS>) => state[NameSpace.OFFERS].initialOffers;
const getOffers = (state: Pick<State, NameSpace.OFFERS>) => state[NameSpace.OFFERS].offers;
const getLoadingStatus = (state: Pick<State, NameSpace.OFFERS>) => state[NameSpace.OFFERS].isLoading;
const getSortBy = (state: Pick<State, NameSpace.OFFERS>) => state[NameSpace.OFFERS].sortBy;
const getCurrentCity = (state: Pick<State, NameSpace.OFFERS>) => state[NameSpace.OFFERS].city;
const getErrorStatus = (state: Pick<State, NameSpace.OFFERS>) => state[NameSpace.OFFERS].errorStatus;
const getFavoriteOffers = (state: Pick<State, NameSpace.OFFERS>) => state[NameSpace.OFFERS].favoriteOffers;

export {
  getInitialOffers,
  getOffers,
  getLoadingStatus,
  getSortBy,
  getCurrentCity,
  getErrorStatus,
  getFavoriteOffers
};
