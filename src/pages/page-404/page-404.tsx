import { Link } from 'react-router-dom';
import { AppRoute } from '../../consts';
import { Helmet } from 'react-helmet-async';
import React from 'react';


function Page404() {
  return (
    <React.Fragment>
      <Helmet>
        <title>404. Страница не найдена</title>
      </Helmet>
      <h1 className='not_found'>
        404.
        <p>Эта страница не желает тебя видеть. <span><Link to={AppRoute.Main}>Уходи!!</Link></span></p>
      </h1>
    </React.Fragment>

  );
}

export default Page404;
