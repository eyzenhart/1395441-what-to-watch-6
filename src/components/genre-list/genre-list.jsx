import React from 'react';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/actions';
import GenreButton from '../genre-button/genre-button';
import propTypes, {arrayOf} from 'prop-types';


const GenreList = (props) => {

  const {onUserChoice, genreList} = props;

  console.log(genreList)


  return (
    <ul className="catalog__genres-list">

      {/* {genreList.payload.map((genre) => <GenreButton key = {genre} genre = {genre} onClick = {onUserChoice}/>)} */}

    </ul>
  );
};

GenreList.propTypes = {
  onUserChoice: propTypes.func,
  genreList: propTypes.shape({
    type: propTypes.string,
    payload: arrayOf(propTypes.string)
  })
};

const mapStateToProps = (state) => ({
  genreList: state.genreList,
  films: state.films
});

const mapDispatchToProps = (dispatch) => ({
  onUserChoice(genre) {
    dispatch(ActionCreator.changeGenre(genre));
  }
});

export {GenreList};
export default connect(mapStateToProps, mapDispatchToProps)(GenreList);

