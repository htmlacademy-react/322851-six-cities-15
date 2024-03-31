import { StatusCodes } from 'http-status-codes';

const CITIES = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];
const DEFAULT_CITY = 'Paris';
const AUTH_TOKEN_KEY_NAME = 'six-cities-token';

enum DateFormat {
  ReviewField = 'MMMM YYYY',
  ReviewValue = 'YYYY-MM-DD'
}

enum ApiRoute {
  Offers = '/offers',
  Login = '/login',
  Favorites = '/favorite',
  Logout = '/logout',
  Comments = '/comments'
}

const StatusCodeMapping: Record<number, boolean> = {
  [StatusCodes.BAD_REQUEST]: true,
  [StatusCodes.UNAUTHORIZED]: true,
  [StatusCodes.NOT_FOUND]: true
};

const Setting = {
  OffersCount: 5,
  MaxRating: 5,
  NearbyOffersCount: 3,
  ReviewsShownCount: 10,
  BaseUrl: 'https://15.design.htmlacademy.pro/six-cities',
  ApiTimeout: 5000
} as const;

enum SortBy {
  Popular = 'Popular',
  PriceUp = 'Price: low to high',
  PriceDown = 'Price: high to low',
  Rating = 'Top rated first'
}

enum PlaceCardClassNamePrefix {
  Main = 'cities',
  Favorites = 'favorites',
  Offer = 'near-places'
}

const PlaceCardImageSize = {
  SMALL: {'width': '150', 'height': '110'},
  LARGE: {'width': '260', 'height': '200'}
} as const;


enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:offerId',
  Page404 = '/404'
}

enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN'
}

enum NameSpace {
  OFFERS = 'OFFERS',
  OFFER = 'OFFER',
  USER = 'USER',
  FAVORITES = 'FAVORITES'
}

export {
  Setting,
  AppRoute,
  AuthorizationStatus,
  PlaceCardImageSize,
  PlaceCardClassNamePrefix,
  DateFormat,
  CITIES,
  DEFAULT_CITY,
  SortBy,
  AUTH_TOKEN_KEY_NAME,
  ApiRoute,
  StatusCodeMapping,
  NameSpace
};
