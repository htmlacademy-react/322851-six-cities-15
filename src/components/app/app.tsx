import { AppRoute } from '../../consts';
import Favorites from '../../pages/favorites/favorites';
import Login from '../../pages/login/login';
import Main from '../../pages/main/main-page';
import {Route, Routes } from 'react-router-dom';
import OfferPage from '../../pages/offer-page/offer-page';
import PrivateRoute from '../private-route/private-route';
import Page404 from '../../pages/page-404/page-404';
import { HelmetProvider } from 'react-helmet-async';
import { Offers } from '../../types/offers';
import Layout from '../layout/layout';
import { useAppSelector } from '../../hooks/use-app-dispatch';
import Loader from '../loader/loader';
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../browser-history';


type AppProps = {
  offers: Offers;
}

function App({offers}: AppProps): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const favoriteOffers = offers.filter((offer) => offer.isFavorite);
  const isLoading = useAppSelector((state) => state.isLoading);

  if (isLoading) {
    return (
      <HelmetProvider>
        <Loader />
      </HelmetProvider>
    );
  }
  return (
    <HelmetProvider>
      <HistoryRouter history={browserHistory}>
        <Routes>
          <Route path={AppRoute.Main} element={<Layout />}>
            <Route
              index element={<Main />}
            />

            <Route
              path={AppRoute.Login}
              element={<Login />}
            />

            <Route
              path={AppRoute.Favorites}
              element={
                <PrivateRoute authorizationStatus={authorizationStatus}>
                  <Favorites offers={favoriteOffers} />
                </PrivateRoute>
              }
            />

            <Route
              path={AppRoute.Offer}
              element={<OfferPage />}
            />

            <Route
              path='*'
              element={<Page404 />}
            />
          </Route>
        </Routes>

      </HistoryRouter>
    </HelmetProvider>
  );
}


export default App;
