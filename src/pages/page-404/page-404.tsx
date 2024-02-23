import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';


function Page404() {
  return (
    <h1>404.
      <p>Эта страница не желает тебя видеть. <Link to={AppRoute.Main}>Уходи!!</Link></p>
    </h1>
  );
}

export default Page404;
