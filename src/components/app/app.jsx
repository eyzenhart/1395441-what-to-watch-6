import React from 'react';
import MainPage from '../main-page/main-page';
import propTypes from 'prop-types';

const App = (props) => {

  return (<React.Fragment>
    <MainPage
      {...props}
    />
  </React.Fragment>
  );
};


App.propTypes = {
  titles: propTypes.arrayOf(propTypes.string),
  promo: propTypes.arrayOf(
      propTypes.shape({
        promoTitle: propTypes.string,
        promoGenre: propTypes.string,
        promoYear: propTypes.string
      })
  )};

export default App;
