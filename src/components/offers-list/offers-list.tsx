import { PLACE_CARD_IMAGE_SIZE, PlaceCardClassNamePrefix } from '../../const';
import { Offer, Offers } from '../../types/offers';
import PlaceCard from '../place-card/place-card';
import React from 'react';

type OffersListProps = {
  offers: Offers;
  classNamePrefix: PlaceCardClassNamePrefix.Main | PlaceCardClassNamePrefix.Favorites;
}

function OffersList({offers, classNamePrefix}: OffersListProps): JSX.Element {
  const imageSize = (classNamePrefix === PlaceCardClassNamePrefix.Main) ? PLACE_CARD_IMAGE_SIZE.Large : PLACE_CARD_IMAGE_SIZE.Small;
  return (
    <React.Fragment>
      {offers.map((offer: Offer): JSX.Element => (
        <PlaceCard key={offer.id}
          offer={offer}
          classNamePrefix={classNamePrefix}
          imageSize={imageSize}
        />))}
    </React.Fragment>

  );
}

export default OffersList;
