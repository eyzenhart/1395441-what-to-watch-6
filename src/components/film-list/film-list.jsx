import React, {useState} from 'react';
import Card from '../card/card';
import movieInfoProps from '../../props/movie-info.props';

const FilmList = ({films}) => {

  const [activeCard, setActiveCard] = useState();

  const handleMouseOver = (id) => {
    setActiveCard(id);
  };

  return (
    <div className="catalog__movies-list">
      {films.map((film) => <Card key = {film.id} {...film} onMouseOver = {handleMouseOver} />)}
    </div>
  );
};

FilmList.propTypes = {
  films: movieInfoProps
};

export default FilmList;
