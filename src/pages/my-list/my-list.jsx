import React from 'react';
import {Link} from 'react-router-dom';
import FilmList from '../../components/film-list/film-list';
import Footer from '../../components/footer/footer';
import { PageHeader } from '../../components/header/header';
import movieInfoProps from '../../props/movie-info.props';

const MyList = ({films}) => {

  return (
    <div className="user-page">
      <PageHeader/>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <FilmList films = {films}/>

      </section>

      <Footer/>
    </div>
  );
};

MyList.propTypes = {
  films: movieInfoProps
};

export default MyList;
