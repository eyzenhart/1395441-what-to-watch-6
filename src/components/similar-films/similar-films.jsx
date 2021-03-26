import React from 'react';
import Card from '../card/card';

const SimilarFilms = ({films, genre}) => {


  const similarFilms = films.find((film) => film.genre === genre);
  console.log(similarFilms)

  return (
    <section className="catalog catalog--like-this">
      <h2 className="catalog__title">More like this</h2>



      <Card genre = {genre}/>
      <div className="catalog__movies-list">
        <article className="small-movie-card catalog__movies-card">
          <div className="small-movie-card__image">
            <img src="img/fantastic-beasts-the-crimes-of-grindelwald.jpg" alt="Fantastic Beasts: The Crimes of Grindelwald" width="280" height="175" />
          </div>
          <h3 className="small-movie-card__title">
            <a className="small-movie-card__link" href="movie-page.html">Fantastic Beasts: The Crimes of Grindelwald</a>
          </h3>
        </article>

        <article className="small-movie-card catalog__movies-card">
          <div className="small-movie-card__image">
            <img src="img/bohemian-rhapsody.jpg" alt="Bohemian Rhapsody" width="280" height="175" />
          </div>
          <h3 className="small-movie-card__title">
            <a className="small-movie-card__link" href="movie-page.html">Bohemian Rhapsody</a>
          </h3>
        </article>

        <article className="small-movie-card catalog__movies-card">
          <div className="small-movie-card__image">
            <img src="img/macbeth.jpg" alt="Macbeth" width="280" height="175" />
          </div>
          <h3 className="small-movie-card__title">
            <a className="small-movie-card__link" href="movie-page.html">Macbeth</a>
          </h3>
        </article>

        <article className="small-movie-card catalog__movies-card">
          <div className="small-movie-card__image">
            <img src="img/aviator.jpg" alt="Aviator" width="280" height="175" />
          </div>
          <h3 className="small-movie-card__title">
            <a className="small-movie-card__link" href="movie-page.html">Aviator</a>
          </h3>
        </article>
      </div>
    </section>
  )
};

export default SimilarFilms;
