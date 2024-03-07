import { createAction } from '@reduxjs/toolkit';
import { Offers } from '../types/offers';


const changeCity = createAction<{city: string}>('changeCity');
const uploadOffers = createAction<{offers: Offers}>('uploadOffers');


export {
  changeCity,
  uploadOffers
};
