const Setting = {
  OffersCount: 5,
  MaxRating: 5
} as const;

enum PlaceCardClassNamePrefix {
  Main = 'cities',
  Favorites = 'favorites'
}

const PLACE_CARD_IMAGE_SIZE = {
  Small: {'width': '150', 'height': '110'},
  Large: {'width': '260', 'height': '200'}
};


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
  PLACE_CARD_IMAGE_SIZE,
  PlaceCardClassNamePrefix
};
