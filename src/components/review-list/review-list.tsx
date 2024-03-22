import React, { useEffect } from 'react';
import ReviewItem from '../review-Item/review-item';
import { store } from '../../store';
import { uploadReviews } from '../../store/thunk-actions';
import { useAppSelector } from '../../hooks/use-app-dispatch';

type ReviewListProps = {
  offerId: string;
}

function ReviewList({ offerId }: ReviewListProps): JSX.Element {
  const reviews = useAppSelector((state) => state.reviews);

  useEffect(() => {
    store.dispatch(uploadReviews(offerId));
  }, [offerId]);

  return (
    <React.Fragment>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{ reviews?.length || 0}</span></h2>
      <ul className="reviews__list">
        { reviews && reviews.map((review) => <ReviewItem key={review.id} review={review} />) }
      </ul>
    </React.Fragment>
  );
}

export default ReviewList;
