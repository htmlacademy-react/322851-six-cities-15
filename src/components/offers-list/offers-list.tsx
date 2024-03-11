import React from 'react';
import { PlaceCardImageSize, PlaceCardClassNamePrefix } from '../../consts';
import { Offer, Offers } from '../../types/offers';
import PlaceCard from '../place-card/place-card';

type OffersListProps = {
  offers: Offers;
  classNamePrefix: PlaceCardClassNamePrefix;
  onActiveCardChange?: (id: string | null) => void;
}

function OffersList({offers, classNamePrefix, onActiveCardChange }: OffersListProps): JSX.Element {
  const imageSize = (classNamePrefix === PlaceCardClassNamePrefix.Favorites) ? PlaceCardImageSize.SMALL : PlaceCardImageSize.LARGE;

  const placeCardMouseEnterHandler = (id: string) => {
    if (onActiveCardChange) {
      onActiveCardChange(id);
    }
  };
  const placeCardMouseLeaveHandler = () => {
    if (onActiveCardChange) {
      onActiveCardChange(null);
    }

  };


  return (
    <React.Fragment>
      {offers.map((offer: Offer): JSX.Element => (
        <PlaceCard
          key={offer.id}
          offer={offer}
          classNamePrefix={classNamePrefix}
          imageSize={imageSize}
          onMouseEnter={placeCardMouseEnterHandler}
          onMouseLeave={placeCardMouseLeaveHandler}
        />))}
    </React.Fragment>

  );
}

export default OffersList;
