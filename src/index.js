import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const data = ['1', '2', '3', '4'];
const promoData = [
  {promoTitle: 'The Grand Budapest Hotel', promoGenre: 'Drama', promoYear: '2014'}
];


ReactDOM.render(
  <App
  titles = {data}
  promo = {promoData}
  />,
  document.querySelector('#root')
);
