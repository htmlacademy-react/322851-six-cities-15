import { Setting } from './consts';
import dayjs from 'dayjs';

const calculateRatingWidth = (rating: number): string => `${ Math.round(rating) * 100 / Setting.MaxRating}%`;

const capitalizeWord = (word: string): string => {
  const firstLetter = word.substring(0,1);
  const remainingWord = word.substring(1);
  return `${firstLetter.toUpperCase()}${remainingWord}`;
};

const parseDate = (date: string, dateFormat: string): string => dayjs(date).format(dateFormat);

export {
  calculateRatingWidth,
  capitalizeWord,
  parseDate
};
