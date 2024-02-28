import { maxRating } from './const';

const calculateRatingWidth = (rating: number): string => `${ Math.round(rating) * 100 / maxRating}%`;
const capitalizeWord = (word: string): string => {
  const firstLetter = word.substring(0,1);
  const remainingWord = word.substring(1);
  return `${firstLetter.toUpperCase()}${remainingWord}`;
};

export {
  calculateRatingWidth,
  capitalizeWord
};
