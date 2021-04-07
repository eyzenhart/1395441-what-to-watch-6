import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {Link, useParams} from 'react-router-dom';
import Footer from '../footer/footer';
import PageHeader from '../header/header';
import Tabs from '../tabs/tabs';
import {getFilms, getLoadedFilmListStatus} from '../../store/app-data/selectors';
import SimilarFilms from '../similar-films/similar-films';
import {AUTH_STATUS} from '../../store/api-actions';
import {getAuthStatus} from '../../store/user/selectors';
import {postFavouriteFilm} from '../../store/api-actions';
import propTypes from 'prop-types';
import movieInfoProps from '../../props/movie-info.props';
import LoadingScreen from '../../components/loading-screen/loading-screen';
import {fetchFilmsList} from '../../store/api-actions';


const MoviePage = ({films, authorizationStatus, onFilmAdd, isFilmListLoaded, onLoadFilmList}) => {

  const {id} = useParams();
  const film = films.find((movie) => movie.id == id);

  useEffect(() => {
    if (!isFilmListLoaded) {
      onLoadFilmList();
    }
  }, [isFilmListLoaded]);

  if (!isFilmListLoaded) {
    return <LoadingScreen/>;
  }

  if (!film) {
    return null;
  }

  const newStyle = {backgroundColor: film.backgroundColor};



  return (<React.Fragment>
      <section style = {newStyle} className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={film.backgroundImage} alt={film.name} />
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
                <Link to={`/player/` + (film.id)} className="btn btn--play movie-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </Link>
                <Link to={authorizationStatus == AUTH_STATUS.AUTH ? `/mylist` : `/login`} onClick = {() => onFilmAdd(film, film.id, 1)} className="btn btn--list movie-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </Link>
                {authorizationStatus == AUTH_STATUS.AUTH ? <Link to={`/films/` + (film.id) + `/review`} className="btn movie-card__button">Add review</Link> : null}
              </div>
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={film.posterImage} alt={film.name} width="218" height="327" />
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

            <SimilarFilms films = {films.filter((movie) => movie.genre == film.genre && movie.id !== film.id).slice(0, 4)}/>

          </div>
        </section>

        <Footer/>

      </div>
    </React.Fragment>
  );
};


MoviePage.propTypes = {
  films: movieInfoProps,
  authorizationStatus: propTypes.string,
  onFilmAdd: propTypes.func,
  isFilmListLoaded: propTypes.bool
};

const mapStateToProps = (state) => ({
  films: getFilms(state),
  authorizationStatus: getAuthStatus(state),
  isFilmListLoaded: getLoadedFilmListStatus(state)
});

const mapDispatchToProps = (dispatch) => ({
  onFilmAdd(film, id, status) {
    dispatch(postFavouriteFilm(film, id, status));
  },
  onLoadFilmList() {
    dispatch(fetchFilmsList());
  }
});

export {MoviePage};
export default connect(mapStateToProps, mapDispatchToProps)(MoviePage);
