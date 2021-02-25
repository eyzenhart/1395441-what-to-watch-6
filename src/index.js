import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import filmsData from './mocks/films';

const promoData = [
  {promoTitle: `The Grand Budapest Hotel`, promoGenre: `Drama`, promoYear: `2014`}
];


ReactDOM.render(
    <App
      promo = {promoData}
      films = {filmsData}
    />,
    document.querySelector(`#root`)
);
