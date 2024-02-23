import { AppRoute, AuthorizationStatus } from '../../const';
import Favorites from '../../pages/favorites/favorites';
import Login from '../../pages/login/login';
import Main from '../../pages/main/main-page';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Offer from '../../pages/offer/offer';
import PrivateRoute from '../private-route/private-route';
import Page404 from '../../pages/page-404/page-404';

type AppProps = {
  offersCount: number;
}

function App({offersCount}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<Main offersCount={offersCount} />}
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
          element={<Offer />}
        />

        <Route
          path='*'
          element={<Page404 />}
        />

      </Routes>
    </BrowserRouter>
  );
}


export default App;
