import { useEffect } from 'react';
import { store } from '../store';
import { uploadFavoriteOffers } from '../store/thunk-actions';
import { Offers } from '../types/offers';

const useFavoriteOffers = (favoriteOffers: Offers | null, isAuth: boolean) => {
  useEffect(() => {
    if (!favoriteOffers && isAuth) {
      store.dispatch(uploadFavoriteOffers());
    }
  }, [favoriteOffers, isAuth]);
};

export { useFavoriteOffers };
