import React from 'react';
import {connect} from 'react-redux';
import Card from '../card/card';
import propTypes from 'prop-types';
import movieInfoProps from '../../props/movie-info.props';
import {getCardId} from '../../store/actions';


const SimilarFilms = ({films, onCardChoice}) => {

  return (
    <div className="catalog__movies-list">

      {films.map((film) => <Card key = {film.id} onClick={onCardChoice} {...film}/>)}

    </div>
  );
};

SimilarFilms.propTypes = {
  films: movieInfoProps,
  onCardChoice: propTypes.func
};

const mapDispatchToProps = (dispatch) => ({
  onCardChoice(id) {
    dispatch(getCardId(id))
  }
});

export default connect(null, mapDispatchToProps)(SimilarFilms);
