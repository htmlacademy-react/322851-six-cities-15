import { Helmet } from 'react-helmet-async';
import { AuthorizationStatus, PlaceCardClassNamePrefix } from '../../consts';
import { Offers } from '../../types/offers';
import OffersList from '../../components/offers-list/offers-list';
import Header from '../../components/header/header';

type FavoritesProps = {
  offers: Offers;
}

function Favorites({ offers }: FavoritesProps): JSX.Element {
  const favoriteOffers = offers.filter((offer) => offer.isFavorite);
  const cityNames = favoriteOffers.reduce((newOffers: string[], offer) => {
    if (!(newOffers.includes(offer.city.name))) {
      newOffers.push(offer.city.name);
    }
    return newOffers;
  }, []);

  return (
    <div className="page">
      <Helmet>
        <title>6 cities: Favorites</title>
      </Helmet>
      <Header offers={offers} authorizationStatus={AuthorizationStatus.NoAuth} />

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {
                cityNames.map((city) => {
                  const cityOffers = favoriteOffers.filter((offer) => offer.city.name === city);
                  return (
                    <li className="favorites__locations-items" key={city}>
                      <div className="favorites__locations locations locations--current">
                        <div className="locations__item">
                          <a className="locations__item-link" href="#">
                            <span>{city}</span>
                          </a>
                        </div>
                      </div>
                      <div className="favorites__places">
                        <OffersList offers={cityOffers} classNamePrefix={PlaceCardClassNamePrefix.Favorites} />
                      </div>
                    </li>
                  );
                })
              }

            </ul>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Favorites;
