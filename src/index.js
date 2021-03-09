import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import filmsData from './mocks/films';
import {createStore} from 'redux';
import {reducer} from './store/reducer';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';

const promoData = [
  {promoTitle: `The Grand Budapest Hotel`, promoGenre: `Drama`, promoYear: `2014`}
];

const store = createStore(
    reducer,
    composeWithDevTools()
);

ReactDOM.render(
    <Provider store = {store}>
      <App
        promo = {promoData}
        films = {filmsData}
      />
    </Provider>,
    document.querySelector(`#root`)
);
