import { NameSpace } from '../../consts';
import { State } from '../../types/state';

const getInitialOffers = (state: State) => state[NameSpace.OFFERS].initialOffers;
const getOffers = (state: State) => state[NameSpace.OFFERS].offers;
const getLoadingStatus = (state: State) => state[NameSpace.OFFERS].isLoading;
const getSortBy = (state: State) => state[NameSpace.OFFERS].sortBy;
const getCurrentCity = (state: State) => state[NameSpace.OFFERS].city;
const getErrorStatus = (state: State) => state[NameSpace.OFFERS].errorStatus;
const getFavoriteOffers = (state: State) => state[NameSpace.OFFERS].favoriteOffers;

export {
  getInitialOffers,
  getOffers,
  getLoadingStatus,
  getSortBy,
  getCurrentCity,
  getErrorStatus,
  getFavoriteOffers
};
