import React from 'react';
import ReviewForm from '../../components/review-form/review-form';
import {Link, useParams} from 'react-router-dom';
import {getFilms} from '../../store/app-data/selectors';
import {connect} from 'react-redux';
import movieInfoProps from '../../props/movie-info.props';
import {getUserData} from '../../store/actions';
import propTypes from 'prop-types';

const AddReview = ({films, userData}) => {

  const {id} = useParams();
  const film = films.find((movies) => movies.id == id);
  const newStyle = {backgroundColor: film.backgroundColor};

  return (
    <section style={newStyle} className="movie-card movie-card--full">
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img src={film.backgroundImage} alt={film.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <div className="logo">
            <Link to="/" className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`/films/` + film.id} className="breadcrumbs__link">{film.name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>

          <div className="user-block">
            <div className="user-block__avatar">
              <img src={userData.avatarUrl} alt="User avatar" width="63" height="63" />
            </div>
          </div>
        </header>

        <div className="movie-card__poster movie-card__poster--small">
          <img src={film.posterImage} alt={film.name + ` poster`} width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        <ReviewForm film = {film.id}/>
      </div>

    </section>
  );
};

AddReview.propTypes = {
  films: movieInfoProps,
  userData: propTypes.shape({
    avatarUrl: propTypes.string
  })
};

const mapStateToProps = (state) => ({
  films: getFilms(state),
  userData: getUserData(state)
});

export {AddReview};
export default connect(mapStateToProps, null)(AddReview);
