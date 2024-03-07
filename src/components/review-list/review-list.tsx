import React from 'react';
import { Reviews } from '../../types/reviews';
import ReviewItem from '../review-Item/review-item';

type ReviewListProps = {
  reviews: Reviews;
}

function ReviewList({reviews}: ReviewListProps): JSX.Element {
  return (
    <React.Fragment>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        { reviews.map((review) => <ReviewItem key={review.id} review={review} />) }
      </ul>
    </React.Fragment>

  );
}

export default ReviewList;
