import classNames from 'classnames';
import { SortBy } from '../../consts';
import { useAppDispatch, useAppSelector } from '../../hooks/use-app-dispatch';
import { memo, useState } from 'react';
import { getSortBy } from '../../store/main-process/selectors';
import { changeSortBy, updateOffers } from '../../store/main-process/main-process';


function SortingFormTemplate(): JSX.Element {
  const [ isFormOpened, setFormOpened ] = useState(false);
  const currentSortType = useAppSelector(getSortBy);
  const dispatch = useAppDispatch();

  const sortByClickHandler = ({ currentTarget }: React.MouseEvent<HTMLElement>) => {
    dispatch(changeSortBy({sortBy: currentTarget.innerHTML as SortBy}));
    dispatch(updateOffers());
    setFormOpened(false);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={() => setFormOpened(!isFormOpened)}>
        { currentSortType }
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={classNames({
        'places__options places__options--custom': true,
        'places__options--opened': isFormOpened })}
      >
        { Object.entries(SortBy).map(([sortKey, sortValue], index) => (
          <li
            key={sortKey}
            className={classNames({
              'places__option': true,
              'places__option--active': currentSortType === sortValue})}
            tabIndex={index}
            onClick={sortByClickHandler}
          >{ sortValue }
          </li>
        )
        )}
      </ul>
    </form>
  );
}

const SortingForm = memo(SortingFormTemplate);

export default SortingForm;
