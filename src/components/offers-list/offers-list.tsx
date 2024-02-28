import { useState } from 'react';
import { Offer, Offers } from '../../types/offers';
import PlaceCard from '../place-card/place-card';

type OffersListProps = {
  offers: Offers;
}

function OffersList({offers}: OffersListProps): JSX.Element {
  const [activeCard, setActiveCard] = useState('');

  const cardMouseOnHandler = (id: string): void => {
    console.log(id);
    setActiveCard(id);
  };

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer: Offer): JSX.Element => <PlaceCard onMouseEnter={cardMouseOnHandler} key={offer.id} offer={offer} />)}
    </div>
  );
}

export default OffersList;
