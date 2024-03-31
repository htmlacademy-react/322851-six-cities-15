import React, { memo, useEffect } from 'react';
import ReviewItem from '../review-Item/review-item';
import { store } from '../../store';
import { uploadReviews } from '../../store/thunk-actions';
import { useAppSelector } from '../../hooks/use-app-dispatch';

import { getReviews } from '../../store/offer-process/selectors';
import { sortReviewsByDate } from '../../utils';

type ReviewListProps = {
  offerId: string;
}

function ReviewListTemplate({ offerId }: ReviewListProps): JSX.Element {
  const reviews = useAppSelector(getReviews);

  useEffect(() => {
    store.dispatch(uploadReviews(offerId));
  }, [offerId]);

  return (
    <React.Fragment>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{ reviews?.length || 0}</span></h2>
      <ul className="reviews__list">
        { reviews && sortReviewsByDate(reviews).map((review) => <ReviewItem key={review.id} review={review} />) }
      </ul>
    </React.Fragment>
  );
}

const ReviewList = memo(ReviewListTemplate);


export default ReviewList;
