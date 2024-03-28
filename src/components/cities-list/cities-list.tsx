import { CITIES } from '../../consts';
import { changeCity, updateOffers } from '../../store/actions';
import { useAppDispatch, useAppSelector } from '../../hooks/use-app-dispatch';
import classNames from 'classnames';


function CitiesList(): JSX.Element {
  const currentCity = useAppSelector((state) => state.city);

  const dispatch = useAppDispatch();

  const cityTabClickHandler = ({ currentTarget }: React.MouseEvent<HTMLElement>) => {
    dispatch(changeCity({city: currentTarget.innerText}));
    dispatch(updateOffers());

  };

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {
          CITIES.map((city) => (
            <li key={`${city}-tab`} className="locations__item">
              <a className={classNames({
                'locations__item-link tabs__item': true,
                'tabs__item--active' : city === currentCity})}
              href="#" data-city={city}
              onClick={cityTabClickHandler}
              >
                <span>{city}</span>
              </a>
            </li>))
        }
      </ul>
    </section>
  );
}

export default CitiesList;
