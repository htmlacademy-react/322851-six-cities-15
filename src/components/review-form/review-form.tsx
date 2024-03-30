import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import { Setting } from '../../consts';
import { uploadNewReview } from '../../store/thunk-actions';
import { store } from '../../store';

type ReviewFormProps = {
  offerId: string;
}

function ReviewForm({offerId}: ReviewFormProps): JSX.Element {
  const [submitButtonStatus, setSubmitButtonStatus] = useState(true);
  const [formDisableStatus, setFormDisableStatus] = useState(false);
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    rating: 0,
    comment: '',
    offerId: offerId
  });

  useEffect(() => {
    if (formData.rating > 0 && formData.comment.length > 49) {
      setSubmitButtonStatus(false);
    }
  }, [formData]);

  const raitingChangeHandler = ({target}: ChangeEvent<HTMLInputElement>) => {
    if (target.tagName === 'INPUT') {
      setFormData({...formData, rating: parseInt(target.value, 10)});
    }
  };

  const reviewChangeHandler = ({target}: ChangeEvent<HTMLTextAreaElement>) => {
    if (target.tagName === 'TEXTAREA') {
      setFormData({...formData, comment: target.value});
    }
  };

  const disableFormHandler = (status: boolean) => {
    if (status) {
      setFormData({
        rating: 0,
        comment: '',
        offerId: offerId
      });
      form.current?.reset();
    } else {
      setSubmitButtonStatus(false);
    }
    setFormDisableStatus(false);
  };

  const formSubmitHandler = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    setSubmitButtonStatus(true);
    setFormDisableStatus(true);
    store.dispatch(uploadNewReview({...formData, disableForm: (status: boolean) => disableFormHandler(status)}));

  };

  return (
    <form ref={form} className="reviews__form form" action="#" method="post" onSubmit={formSubmitHandler}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating" onChange={raitingChangeHandler}>
        {
          Array.from({ length: Setting.MaxRating }, (_, i: number) => i + 1).reverse().map((item) => (
            <React.Fragment key={`raiting-${item}`}>
              <input className="form__rating-input visually-hidden" name="rating" value={ item } id={`${ item }-stars`} type="radio" disabled={formDisableStatus} />
              <label htmlFor={(formDisableStatus) ? '' : `${ item }-stars`} className="reviews__rating-label form__rating-label" title="perfect">
                <svg className="form__star-image" width="37" height="33">
                  <use xlinkHref="#icon-star"></use>
                </svg>
              </label>
            </React.Fragment>)
          )
        }
      </div>
      <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" onChange={reviewChangeHandler} disabled={formDisableStatus}></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
        To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={submitButtonStatus}>Submit</button>
      </div>
    </form>
  );
}

export default ReviewForm;
