import { AppRoute, AuthorizationStatus } from '../../const';
import Favorites from '../../pages/favorites/favorites';
import Login from '../../pages/login/login';
import Main from '../../pages/main/main-page';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import OfferPage from '../../pages/offer-page/offer-page';
import PrivateRoute from '../private-route/private-route';
import Page404 from '../../pages/page-404/page-404';
import { HelmetProvider } from 'react-helmet-async';
import { Offers } from '../../types/offers';

type AppProps = {
  offers: Offers;
}

function App({offers}: AppProps): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={<Main offers={offers} />}
          />
          <Route
            path={AppRoute.Login}
            element={<Login />}
          />

          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
                <Favorites />
              </PrivateRoute>
            }
          />

          <Route
            path={AppRoute.Offer}
            element={<OfferPage offers={offers} />}
          />

          <Route
            path='*'
            element={<Page404 />}
          />

        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}


export default App;
