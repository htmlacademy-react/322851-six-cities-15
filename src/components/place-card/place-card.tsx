import { Link } from 'react-router-dom';
import { Offer } from '../../types/offers';
import { calculateRatingWidth, capitalizeWord } from '../../utils';
import { useState } from 'react';

type PlaceCardProps = {
  offer: Offer;
  classNamePrefix: string;
  imageSize: {width: string; height: string};
}

function PlaceCard({ offer, classNamePrefix, imageSize}: PlaceCardProps): JSX.Element {
  const isFavorite = (offer.isFavorite) ? 'place-card__bookmark-button--active' : null;
  const [activeCard, setActiveCard] = useState('');
  const isActive = (activeCard) ? '' : null;

  const cardMouseOnHandler = (id: string): void => {
    setActiveCard(id);
  };

  return (
    <article className={`${classNamePrefix}__card place-card`}>
      {offer.isPremium && <div className="place-card__mark"><span>Premium</span></div>}
      {isActive}
      <div className={`${classNamePrefix}__image-wrapper place-card__image-wrapper`}>
        <a href="#" onMouseEnter={() => cardMouseOnHandler(offer.id)}>
          <img className="place-card__image" src={offer.previewImage} width={imageSize.width} height={imageSize.height} alt="Place image" />
        </a>
      </div>
      <div className="place-card__info" >
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button ${isFavorite} button`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: calculateRatingWidth(offer.rating)}}>
            </span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${offer.id}`}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{capitalizeWord(offer.type)}</p>
      </div>
    </article>
  );
}

export default PlaceCard;
