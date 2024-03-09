import { createAction } from '@reduxjs/toolkit';
import { Offers } from '../types/offers';
import { SortBy } from '../consts';


const changeCity = createAction<{city: string}>('changeCity');
const changeSortBy = createAction<{sortBy: SortBy}>('changeSortBy');
const uploadOffers = createAction<{offers: Offers}>('uploadOffers');


export {
  changeCity,
  uploadOffers,
  changeSortBy
};
