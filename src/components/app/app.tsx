import { AppRoute, AuthorizationStatus } from '../../consts';
import Favorites from '../../pages/favorites/favorites';
import Login from '../../pages/login/login';
import Main from '../../pages/main/main-page';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import OfferPage from '../../pages/offer-page/offer-page';
import PrivateRoute from '../private-route/private-route';
import Page404 from '../../pages/page-404/page-404';
import { HelmetProvider } from 'react-helmet-async';
import { Offers } from '../../types/offers';
import detailedOffers from '../../mocks/detailedOffers';
import Layout from '../layout/layout';
import reviews from '../../mocks/reviews';

type AppProps = {
  offers: Offers;
}

function App({offers}: AppProps): JSX.Element {
  const favoriteOffers = offers.filter((offer) => offer.isFavorite);
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.Main} element={<Layout offersCount={favoriteOffers.length} authorizationStatus={AuthorizationStatus.Auth} />}>
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
                <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
                  <Favorites offers={favoriteOffers} />
                </PrivateRoute>
              }
            />

            <Route
              path={AppRoute.Offer}
              element={<OfferPage reviews={reviews} detaildeOffers={detailedOffers} shortOffers={offers} />}
            />

            <Route
              path='*'
              element={<Page404 />}
            />
          </Route>
        </Routes>

      </BrowserRouter>
    </HelmetProvider>
  );
}


export default App;
