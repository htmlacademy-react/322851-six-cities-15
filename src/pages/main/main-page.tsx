import { Helmet } from 'react-helmet-async';
import OffersList from '../../components/offers-list/offers-list';
import { PlaceCardClassNamePrefix } from '../../consts';
import Map from '../../components/map/map';
import { useState } from 'react';
import CitiesList from '../../components/cities-list/cities-list';
import { useAppSelector } from '../../hooks/use-app-dispatch';
import EmptyCardsList from '../../components/empty-cards-list/empty-cards-list';
import SortingForm from '../../components/sorting-form/sorting-form';
import Loader from '../../components/loader/loader';

function Main(): JSX.Element {
  const [activeCard, setActiveCard] = useState<null | string>(null);

  const offers = useAppSelector((state) => state.offers);

  const currentCity = useAppSelector((state) => state.city);

  const activeCardChangeHandler = (id: string | null) => setActiveCard(id);

  const points = (offers) ? offers.map((offer) => offer.location) : null;
  const selectedPoint = (activeCard) ? offers?.find((offer) => offer.id === activeCard)?.location : null;

  if (!offers) {
    return <Loader />;
  }

  return (
    <main className="page__main page__main--index">
      <Helmet>
        <title>6 cities</title>
      </Helmet>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <CitiesList />
      </div>
      {!offers.length && <EmptyCardsList city={currentCity} />}
      {
        offers.length &&
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offers.length} places to stay in {currentCity}</b>
              <SortingForm />
              <div className="cities__places-list places__list tabs__content">
                <OffersList offers={offers} classNamePrefix={PlaceCardClassNamePrefix.Main} onActiveCardChange={activeCardChangeHandler} />
              </div>
            </section>
            <div className="cities__right-section">
              <Map cityLocation={offers[0].city.location} points={points} selectedPoint={selectedPoint} />
            </div>
          </div>

        </div>
      }
    </main>
  );
}

export default Main;
