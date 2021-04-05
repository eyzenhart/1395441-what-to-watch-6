import React, { useState } from 'react';
import Film from '../film/film';
import FilmList from '../film-list/film-list';
import movieInfoProps from '../../props/movie-info.props';
import GenreList from '../genre-list/genre-list';
import Footer from '../footer/footer';
import ShowMoreButton from '../show-more-button/show-more-button';
import {connect} from 'react-redux';
import {getCurrentFilms} from '../../store/app-data/selectors';


const MainPage = ({films}) => {

  const [listLength, setListLength] = useState(8);

  // const endOfFilms = films.length - listLength;


  // const getButton = (films, listLength) => {
  //   if ((films.length - listLength) > 8) {
  //     return <ShowMoreButton onClick = {() => setListLength(listLength + 8)}/>
  //   } else {
  //     setListLength(listLength + (films.length - listLength))
  //   }
  // };


  // console.log(films.length)
  // console.log(listLength)
  // console.log(films.length - listLength)
  // console.log((films.length - listLength) > 8)


  return (<React.Fragment>

    <Film/>

    <div className="page-content">
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <GenreList films = {films}/>

        <FilmList films = {films.slice(0, listLength)}/>

        {(films.length - listLength) > 8 ? <ShowMoreButton onClick = {() => setListLength(listLength + 8)}/> : console.log(films.length - listLength)}
        {/* // setListLength(listLength + (films.length - listLength))} */}
         {/* {getButton(films, listLength)} */}

      </section>

      <Footer/>

    </div>
  </React.Fragment>);
};


MainPage.propTypes = {
  films: movieInfoProps,
};

  const mapStateToProps = (state) => ({
    films: getCurrentFilms(state)
  });

  export default connect(mapStateToProps, null)(MainPage);
