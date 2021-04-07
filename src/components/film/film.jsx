import React from 'react';
import propTypes from 'prop-types';
import {Link} from 'react-router-dom';
import PageHeader from '../header/header';
import {AUTH_STATUS, postFavouriteFilm} from '../../store/api-actions';
import {connect} from 'react-redux';
import {getPromoFilm} from '../../store/app-data/selectors';
import {getAuthStatus} from '../../store/user/selectors';


const Film = ({promoFilm, onFilmAdd, authorizationStatus}) => {

  return (
    <section className="movie-card">
      <div className="movie-card__bg">
        <img src={promoFilm.background_image} alt={promoFilm.name} />
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <PageHeader/>

      <div className="movie-card__wrap">
        <div className="movie-card__info">
          <div className="movie-card__poster">
            <img src={promoFilm.poster_image} alt={promoFilm.name + ` poster`} width="218" height="327" />
          </div>
          <div className="movie-card__desc">
            <h2 className="movie-card__title">{promoFilm.name}</h2>
            <p className="movie-card__meta">
              <span className="movie-card__genre">{promoFilm.genre}</span>
              <span className="movie-card__year">{promoFilm.released}</span>
            </p>
            <div className="movie-card__buttons">
              <Link to={`/player/` + promoFilm.id} className="btn btn--play movie-card__button" type="button">
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
                <span>Play</span>
              </Link>
              <Link to={authorizationStatus === AUTH_STATUS.AUTH ? `/mylist` : `/login`} onClick = {() => onFilmAdd(promoFilm, promoFilm.id, 1)} className="btn btn--list movie-card__button" type="button">
                <svg viewBox="0 0 19 20" width="19" height="20">
                  <use xlinkHref="#add"></use>
                </svg>
                <span>My list</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>);
};


Film.propTypes = {
  promoFilm: propTypes.shape({
    id: propTypes.number,
    name: propTypes.string,
    poster_image: propTypes.string,
    background_image: propTypes.string,
    background_color: propTypes.string,
    genre: propTypes.string,
    released: propTypes.number,
  }),
  onFilmAdd: propTypes.func,
  authorizationStatus: propTypes.string
};

const mapStateToProps = (state) => ({
  promoFilm: getPromoFilm(state),
  authorizationStatus: getAuthStatus(state)
});

const mapDispatchToProps = (dispatch) => ({
  onFilmAdd(film, id, status) {
    dispatch(postFavouriteFilm(film, id, status));
  }
});

export {Film};
export default connect(mapStateToProps, mapDispatchToProps)(Film);
