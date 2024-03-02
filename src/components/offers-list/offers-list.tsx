import { PlaceCardImageSize, PlaceCardClassNamePrefix } from '../../consts';
import { Offer, Offers } from '../../types/offers';
import PlaceCard from '../place-card/place-card';
import React from 'react';

type OffersListProps = {
  offers: Offers;
  classNamePrefix: PlaceCardClassNamePrefix;
}

function OffersList({offers, classNamePrefix}: OffersListProps): JSX.Element {
  const imageSize = (classNamePrefix === PlaceCardClassNamePrefix.Main) ? PlaceCardImageSize.LARGE : PlaceCardImageSize.SMALL;
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
