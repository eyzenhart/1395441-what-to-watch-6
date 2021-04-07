import React, {useState} from 'react';
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

  return (<React.Fragment>

    <Film/>

    <div className="page-content">
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <GenreList films = {films}/>

        <FilmList films = {films.slice(0, listLength)}/>

        {(((films.length - listLength) >= 0) && (<ShowMoreButton onClick = {() => setListLength(listLength + 8)}/>))}

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
