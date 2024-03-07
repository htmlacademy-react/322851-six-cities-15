import { Helmet } from 'react-helmet-async';
import { DetailedOffers, Offers } from '../../types/offers';
import { useParams } from 'react-router-dom';
import { calculateRatingWidth, capitalizeWord } from '../../utils';
import ReviewForm from '../../components/review-form/review-form';
import Page404 from '../page-404/page-404';
import ReviewList from '../../components/review-list/review-list';
import { Reviews } from '../../types/reviews';
import Map from '../../components/map/map';
import { PlaceCardClassNamePrefix } from '../../consts';
import OffersList from '../../components/offers-list/offers-list';
import { useState } from 'react';

type OfferProps = {
  shortOffers: Offers;
  detaildeOffers: DetailedOffers;
  reviews: Reviews;
}

function OfferPage({shortOffers, detaildeOffers, reviews}: OfferProps): JSX.Element {
  const { offerId } = useParams();
  const [activeCard, setActiveCard] = useState<null | string>(null);
  const currentOffer = detaildeOffers.find((offer) => offer.id === offerId);
  const isFavorite = (currentOffer?.isFavorite) ? 'offer__bookmark-button--active' : null;
  const points = shortOffers.slice(1).map((offer) => offer.location);
  const activeCardChangeHandler = (id: string | null) => setActiveCard(id);
  const selectedPoint = (activeCard) ? shortOffers.find((offer) => offer.id === activeCard)?.location : null;

  if (!currentOffer) {
    return <Page404 />;
  }

  return (
    <main className="page__main page__main--offer">
      <Helmet>
        <title>6 cities: Offer</title>
      </Helmet>
      <section className="offer">
        <div className="offer__gallery-container container">
          <div className="offer__gallery">
            <div className="offer__image-wrapper">
              <img className="offer__image" src="img/room.jpg" alt="Photo studio" />
            </div>
            <div className="offer__image-wrapper">
              <img className="offer__image" src="img/apartment-01.jpg" alt="Photo studio" />
            </div>
            <div className="offer__image-wrapper">
              <img className="offer__image" src="img/apartment-02.jpg" alt="Photo studio" />
            </div>
            <div className="offer__image-wrapper">
              <img className="offer__image" src="img/apartment-03.jpg" alt="Photo studio" />
            </div>
            <div className="offer__image-wrapper">
              <img className="offer__image" src="img/studio-01.jpg" alt="Photo studio" />
            </div>
            <div className="offer__image-wrapper">
              <img className="offer__image" src="img/apartment-01.jpg" alt="Photo studio" />
            </div>
          </div>
        </div>
        <div className="offer__container container">
          <div className="offer__wrapper">
            {currentOffer.isPremium &&
              <div className="offer__mark">
                <span>Premium</span>
              </div>}
            <div className="offer__name-wrapper">
              <h1 className="offer__name">
                {currentOffer.title}
              </h1>
              <button className={`offer__bookmark-button ${isFavorite} button`} type="button">
                <svg className="offer__bookmark-icon" width="31" height="33">
                  <use xlinkHref="#icon-bookmark"></use>
                </svg>
                <span className="visually-hidden">To bookmarks</span>
              </button>
            </div>
            <div className="offer__rating rating">
              <div className="offer__stars rating__stars">
                <span style={{width: calculateRatingWidth(currentOffer.rating)}}></span>
                <span className="visually-hidden">Rating</span>
              </div>
              <span className="offer__rating-value rating__value">{currentOffer.rating}</span>
            </div>
            <ul className="offer__features">
              <li className="offer__feature offer__feature--entire">
                {capitalizeWord(currentOffer.type)}
              </li>
              <li className="offer__feature offer__feature--bedrooms">
                {(currentOffer.bedrooms > 1) ? `${currentOffer.bedrooms} Bedrooms` : `${currentOffer.bedrooms} Bedroom`}
              </li>
              <li className="offer__feature offer__feature--adults">
                {(currentOffer.maxAdults > 1) ? `Max ${currentOffer.maxAdults} Adults` : `Max ${currentOffer.maxAdults} Adult`}
              </li>
            </ul>
            <div className="offer__price">
              <b className="offer__price-value">&euro;{currentOffer.price}</b>
              <span className="offer__price-text">&nbsp;night</span>
            </div>
            <div className="offer__inside">
              <h2 className="offer__inside-title">What&apos;s inside</h2>
              <ul className="offer__inside-list">
                {currentOffer.goods.map((feature) => (
                  <li className="offer__inside-item" key={feature + currentOffer.id}>
                    {feature}
                  </li>)
                )}
              </ul>
            </div>
            <div className="offer__host">
              <h2 className="offer__host-title">Meet the host</h2>
              <div className="offer__host-user user">
                <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                  <img className="offer__avatar user__avatar" src="img/avatar-angelina.jpg" width="74" height="74" alt="Host avatar" />
                </div>
                <span className="offer__user-name">
                  {currentOffer.host.name}
                </span>
                {currentOffer.host.isPro && <span className="offer__user-status">Pro</span>}
              </div>
              <div className="offer__description">
                <p className="offer__text">
                  {currentOffer.description}
                </p>
                <p className="offer__text">
                    An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.
                </p>
              </div>
            </div>
            <section className="offer__reviews reviews">
              <ReviewList reviews={reviews} />
              <ReviewForm />
            </section>
          </div>
        </div>
        <section className="offer__map map">
          <Map cityLocation={detaildeOffers[0].city.location} points={points} selectedPoint={selectedPoint} />
        </section>
      </section>
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
          <div className="near-places__list places__list">
            <OffersList offers={shortOffers.slice(1)} classNamePrefix={PlaceCardClassNamePrefix.Offer} onActiveCardChange={activeCardChangeHandler} />
          </div>
        </section>
      </div>
    </main>
  );
}

export default OfferPage;
