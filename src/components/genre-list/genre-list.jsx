import React from 'react';
import {connect} from 'react-redux';
import {changeGenre} from '../../store/actions';
import GenreButton from '../genre-button/genre-button';
import propTypes, {arrayOf} from 'prop-types';
import {getFilms, getGenres} from '../../store/app-data/selectors';


const GenreList = (props) => {

  const {onUserChoice, genreList} = props;

  genreList.unshift(`All genres`);

  return (
    <ul className="catalog__genres-list">

      {genreList.map((genre) => <GenreButton key = {genre} genre = {genre} onClick = {onUserChoice}/>)}

    </ul>
  );
};

GenreList.propTypes = {
  onUserChoice: propTypes.func,
  genreList: arrayOf(propTypes.string)
};

const mapStateToProps = (state) => ({
  genreList: getGenres(state),
  films: getFilms(state)
});

const mapDispatchToProps = (dispatch) => ({
  onUserChoice(genre) {
    dispatch(changeGenre(genre));
  }
});

export {GenreList};
export default React.memo(connect(mapStateToProps, mapDispatchToProps)(GenreList));

