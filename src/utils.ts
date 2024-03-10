import { Setting, SortBy } from './consts';
import dayjs from 'dayjs';
import { Offers } from './types/offers';

const calculateRatingWidth = (rating: number): string => `${ Math.round(rating) * 100 / Setting.MaxRating}%`;

const capitalizeWord = (word: string): string => {
  const firstLetter = word.substring(0,1);
  const remainingWord = word.substring(1);
  return `${firstLetter.toUpperCase()}${remainingWord}`;
};

const parseDate = (date: string, dateFormat: string): string => dayjs(date).format(dateFormat);

const sortOffers = (initialOffers: Offers, sortType: SortBy) => {
  const offers = [...initialOffers];
  switch (sortType) {
    case SortBy.Popular:
      break;
    case SortBy.PriceDown:
      offers.sort((firstOffer, secondOffer) => secondOffer.price - firstOffer.price);
      break;
    case SortBy.PriceUp:
      offers.sort((firstOffer, secondOffer) => firstOffer.price - secondOffer.price);
      break;
    case SortBy.Rating:
      offers.sort((firstOffer, secondOffer) => secondOffer.rating - firstOffer.rating);
      break;
  }
  return offers;
};

export {
  calculateRatingWidth,
  capitalizeWord,
  parseDate,
  sortOffers
};
