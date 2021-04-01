import React, { useState } from 'react';
import Film from '../film/film';
import propTypes from 'prop-types';
import FilmList from '../film-list/film-list';
import movieInfoProps from '../../props/movie-info.props';
import GenreList from '../genre-list/genre-list';
import Footer from '../footer/footer';
import ShowMoreButton from '../show-more-button/show-more-button';
import { connect } from 'react-redux';
import {getCurrentFilms} from '../../store/app-data/selectors';


const MainPage = (props) => {

  const {films, promo} = props;

  const [listLength, setListLength] = useState(8);


  return (<React.Fragment>

    {promo.map((promoData) => <Film {...promoData} key = {promoData.promoTitle}/>)}

    <div className="page-content">
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <GenreList films = {films}/>

        <FilmList films = {films.slice(0, listLength)}/>

        {films.slice(8) ? <ShowMoreButton onClick = {() => setListLength(listLength + 8)}/> : null}

      </section>

      <Footer/>

    </div>
  </React.Fragment>);
};


MainPage.propTypes = {
  films: movieInfoProps,
  promo: propTypes.arrayOf(
      propTypes.shape({
        promoTitle: propTypes.string,
        promoGenre: propTypes.string,
        promoYear: propTypes.string
      })
  )};

  const mapStateToProps = (state) => ({
    films: getCurrentFilms(state)
  });

  export default connect(mapStateToProps, null)(MainPage);
