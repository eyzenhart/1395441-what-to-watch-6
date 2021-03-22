import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
// import filmsData from './mocks/films';
import {createStore, applyMiddleware} from 'redux';
import {reducer} from './store/reducer';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {createAPI} from './api'
import {ActionCreator} from './store/actions';
import {authCheck} from './api-actions';
import {AUTH_STATUS} from './api-actions';
import {redirect} from './store/redirect'

const promoData = [
  {promoTitle: `The Grand Budapest Hotel`, promoGenre: `Drama`, promoYear: `2014`}
];

const api = createAPI(
  () => store.dispatch(ActionCreator.requiredAuthorization(AUTH_STATUS.NO_AUTH))
);


const store = createStore(
    reducer,
    composeWithDevTools(
      applyMiddleware(thunk.withExtraArgument(api)),
      applyMiddleware(redirect)
    )
);

store.dispatch(authCheck());


ReactDOM.render(
    <Provider store = {store}>
      <App
        promo = {promoData}
        // films = {filmsData}
      />
    </Provider>,
    document.querySelector(`#root`)
);
