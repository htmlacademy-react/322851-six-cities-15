const maxRating = 5;

const Setting = {
  OffersCount: 5
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
  maxRating
};
