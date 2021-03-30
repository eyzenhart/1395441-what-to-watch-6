import React from 'react';
import { connect } from 'react-redux';
import {Link, useParams} from 'react-router-dom';
import { NameSpace } from '../../store/root-reducer';
import Footer from '../footer/footer';
import {PageHeader} from '../header/header';
import Tabs from '../tabs/tabs';
import {getActiveCard, getActiveTab, getCardId, getComments, getFilms} from '../../store/app-data/selectors'
import { FilmList } from '../film-list/film-list';
import Card from '../card/card'
import SimilarFilms from '../similar-films/similar-films';


const MoviePage = ({films}) => {

  const {id} = useParams();
  const film = films.find((film) => film.id == id);
  const newStyle = {backgroundColor: film.background_color}

  return (<React.Fragment>
    <section style = {newStyle} className="movie-card movie-card--full">
      <div className="movie-card__hero">
        <div className="movie-card__bg">
          <img src={film.background_image} alt={film.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <PageHeader/>

        <div className="movie-card__wrap">
          <div className="movie-card__desc">
            <h2 className="movie-card__title">{film.name}</h2>
            <p className="movie-card__meta">
              <span className="movie-card__genre">{film.genre}</span>
              <span className="movie-card__year">{film.released}</span>
            </p>

            <div className="movie-card__buttons">
              <button className="btn btn--play movie-card__button" type="button">
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
                <span>Play</span>
              </button>
              <button className="btn btn--list movie-card__button" type="button">
                <svg viewBox="0 0 19 20" width="19" height="20">
                  <use xlinkHref="#add"></use>
                </svg>
                <span>My list</span>
              </button>
              <Link to={"/films/" + (film.id) + "/review"} className="btn movie-card__button">Add review</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="movie-card__wrap movie-card__translate-top">
        <div className="movie-card__info">
          <div className="movie-card__poster movie-card__poster--big">
            <img src={film.poster_image} alt={film.name} width="218" height="327" />
          </div>

          <div className="movie-card__desc">

            <Tabs film={film}/>

          </div>
        </div>
      </div>
    </section>

    <div className="page-content">
      <section className="catalog catalog--like-this">
        <h2 className="catalog__title">More like this</h2>
        <div className="catalog__movies-list">

          <SimilarFilms films = {films.filter((movie) => movie.genre == film.genre).slice(0, 4)}/>

        </div>
      </section>

      <Footer/>

    </div>
  </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  films: getFilms(state),
});

export {MoviePage};
export default connect(mapStateToProps, null)(MoviePage);
