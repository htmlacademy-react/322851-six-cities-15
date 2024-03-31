import { NameSpace } from '../../consts';
import { State } from '../../types/state';

const getCurrentOffer = (state: State) => state[NameSpace.OFFER].currentOffer;
const getNearbyOffers = (state: State) => state[NameSpace.OFFER].nearbyOffers;
const getReviews = (state: State) => state[NameSpace.OFFER].reviews;


export { getCurrentOffer, getNearbyOffers, getReviews };
