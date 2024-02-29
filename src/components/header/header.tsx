import { Link } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { DetailedOffers, Offers } from '../../types/offers';

type HeaderProps = {
  offers: Offers | DetailedOffers;
  authorizationStatus: AuthorizationStatus;
}

function Header({ offers, authorizationStatus }: HeaderProps): JSX.Element {
  const favoriteOffersCount = offers.filter((offer) => offer.isFavorite).length;
  const isAuth = authorizationStatus === AuthorizationStatus.Auth;
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className="header__logo-link header__logo-link--active" to={AppRoute.Main}>
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              {isAuth &&
              <li className="header__nav-item user">
                <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Favorites}>
                  <div className="header__avatar-wrapper user__avatar-wrapper">
                  </div>
                  <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  <span className="header__favorite-count">{favoriteOffersCount}</span>
                </Link>
              </li>}
              <li className="header__nav-item">
                <Link className="header__nav-link" to={AppRoute.Login}>
                  <span className="header__signout">{(isAuth) ? 'Log Out' : 'Login'}</span>
                </Link>
              </li>
            </ul>

          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
