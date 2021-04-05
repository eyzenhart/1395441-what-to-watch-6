import React, {useEffect} from 'react';
import Card from '../card/card';
import propTypes from 'prop-types';
import {connect} from 'react-redux';
import movieInfoProps from '../../props/movie-info.props';
import {fetchFilmsList} from '../../store/api-actions';
import {getCardId} from '../../store/actions';
import LoadingScreen from '../loading-screen/loading-screen';
import {getLoadedFilmListStatus} from '../../store/app-data/selectors';


const FilmList = (props) => {


  const {films, isFilmListLoaded, onLoadFilmList, onCardChoice} = props;


  useEffect(() => {
    if (!isFilmListLoaded) {
      onLoadFilmList();
    }
  }, [isFilmListLoaded]);

  if (!isFilmListLoaded) {
    return <LoadingScreen/>
  };


  return (
    <div className="catalog__movies-list">

      {films.map((film) => <Card key = {film.id} {...film} onClick={onCardChoice}/>)}

    </div>
  );
};


FilmList.propTypes = {
  films: movieInfoProps,
  isFilmListLoaded: propTypes.bool,
  onLoadFilmList: propTypes.func,
  onCardChoice: propTypes.func
};


const mapStateToProps = (state) => ({
  isFilmListLoaded: getLoadedFilmListStatus(state)
});


const mapDispatchToProps = (dispatch) => ({
  onLoadFilmList() {
    dispatch(fetchFilmsList())
  },
  onCardChoice(id) {
    dispatch(getCardId(id))
  }
});


export {FilmList};
export default connect(mapStateToProps, mapDispatchToProps)(FilmList);
