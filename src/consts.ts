const Setting = {
  OffersCount: 5,
  MaxRating: 5
} as const;

enum PlaceCardClassNamePrefix {
  Main = 'cities',
  Favorites = 'favorites'
}

const PlaceCardImageSize = {
  SMALL: {'width': '150', 'height': '110'},
  LARGE: {'width': '260', 'height': '200'}
} as const;


enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:offerId'
}

enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN'
}

export {
  Setting,
  AppRoute,
  AuthorizationStatus,
  PlaceCardImageSize,
  PlaceCardClassNamePrefix
};
