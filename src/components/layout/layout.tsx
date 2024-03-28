import { Link, Outlet, useNavigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../consts';
import classNames from 'classnames';
import { useAppDispatch, useAppSelector } from '../../hooks/use-app-dispatch';
import { logoutUser } from '../../store/thunk-actions';

function Layout(): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const offers = useAppSelector((state) => state.initialOffers);
  const favoriteOffers = offers?.filter((offer) => offer.isFavorite);
  const isAuth = authorizationStatus === AuthorizationStatus.Auth;
  const pathname = window.location.pathname as AppRoute;
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isNotLogin = pathname !== AppRoute.Login;

  const loginClickHandler = (evt: React.MouseEvent<HTMLElement>) => {
    evt.preventDefault();
    if (isAuth) {
      dispatch(logoutUser());
      navigate(AppRoute.Main);
    } else {
      navigate(AppRoute.Login);
    }
  };

  return (
    <div className={classNames({'page': true, 'page--gray page--main': (pathname === AppRoute.Main), 'page--gray page--login': (pathname === AppRoute.Login)})}>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className={classNames({'header__logo-link': true, 'header__logo-link--active': (pathname === AppRoute.Main)})} to={AppRoute.Main} onClick={() => navigate(AppRoute.Main)}>
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </Link>
            </div>
            {isNotLogin &&
            <nav className="header__nav">
              <ul className="header__nav-list">
                {isAuth &&
              <li className="header__nav-item user">
                <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Favorites} onClick={() => navigate(AppRoute.Favorites)}>
                  <div className="header__avatar-wrapper user__avatar-wrapper">
                  </div>
                  <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  <span className="header__favorite-count">{(favoriteOffers) ? favoriteOffers.length : ''}</span>
                </Link>
              </li>}
                <li className="header__nav-item">
                  <Link className="header__nav-link" to={(isAuth) ? AppRoute.Login : AppRoute.Main} onClick={loginClickHandler}>
                    <span className="header__signout">{(isAuth) ? 'Log Out' : 'Login'}</span>
                  </Link>
                </li>
              </ul>
            </nav>}
          </div>
        </div>
      </header>
      <Outlet />
    </div>
  );
}

export default Layout;
