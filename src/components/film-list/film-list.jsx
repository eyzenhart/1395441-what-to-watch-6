import React, {useState, useEffect} from 'react';
import Card from '../card/card';
import {connect} from 'react-redux';
import movieInfoProps from '../../props/movie-info.props';
import {fetchFilmsList} from '../../api-actions'
import LoadingScreen from '../loading-screen/loading-screen'
import { ActionCreator } from '../../store/actions';


const FilmList = (props) => {

  const {films, isFilmListLoaded, onLoadFilmList} = props;

  useEffect(() => {
    if (!isFilmListLoaded) {
      onLoadFilmList();
    }
  }, [isFilmListLoaded]);

  if (!isFilmListLoaded) {
    return <LoadingScreen/>
  };



  // const [activeCard, setActiveCard] = useState();

  // const handleMouseOver = (id) => {
  //   setActiveCard(id);
  // };

  return (
    <div className="catalog__movies-list">

      {films.map((film) => <Card key = {film.id} {...film}
      // onMouseOver = {handleMouseOver}
      />)}

    </div>
  );
};


FilmList.propTypes = {
  films: movieInfoProps
};

const mapStateToProps = (state) => ({
  films: state.currentFilms,
  isFilmListLoaded: state.isFilmListLoaded
});

const mapDispatchToProps = (dispatch) => ({
  onLoadFilmList() {
    dispatch(fetchFilmsList())
  },
})

export {FilmList};
export default connect(mapStateToProps, mapDispatchToProps)(FilmList);
