import React from 'react';
import { connect } from 'react-redux';
import Card from '../card/card';

const SimilarFilms = ({films, onCardChoice}) => {

  return (
    <div className="catalog__movies-list">

      {films.map((film) => <Card onClick={onCardChoice} {...film}/>)}

    </div>
  )
};

const mapDispatchToProps = (dispatch) => ({
  onCardChoice(id) {
    dispatch(getCardId(id))
  }
});

export default connect(null, mapDispatchToProps)(SimilarFilms);
