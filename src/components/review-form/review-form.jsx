import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {review} from '../../store/api-actions';
import propTypes from 'prop-types';
import { getFormError } from '../../store/app-data/selectors';

const ReviewForm = ({onSubmit, film, formError}) => {

  console.log(formError)

  const [rating, setRating] = useState(null);
  const [text, setText] = useState(``);

  const handleChange = (evt) => {
    const {target} = evt;
    if (target.name === `rating`) {
      setRating(target.value);
    } else {
      setText(target.value);
    }
  };

  const handleFormSubmit = (evt) => {
    evt.preventDefault();

    onSubmit(text, rating, film);
  };

  return (<React.Fragment>
    <form disabled={(text.length < 50 || text.length > 400) && rating} onSubmit={handleFormSubmit} onChange={handleChange} action="#" className="add-review__form">
      <div className="rating">
        <div className="rating__stars">
          <input className="rating__input" id="star-1" type="radio" name="rating" value="1"/>
          <label className="rating__label" htmlFor="star-1">Rating 1</label>

          <input className="rating__input" id="star-2" type="radio" name="rating" value="2" />
          <label className="rating__label" htmlFor="star-2">Rating 2</label>

          <input className="rating__input" id="star-3" type="radio" name="rating" value="3"/>
          <label className="rating__label" htmlFor="star-3">Rating 3</label>

          <input className="rating__input" id="star-4" type="radio" name="rating" value="4" />
          <label className="rating__label" htmlFor="star-4">Rating 4</label>

          <input className="rating__input" id="star-5" type="radio" name="rating" value="5" />
          <label className="rating__label" htmlFor="star-5">Rating 5</label>

          <input className="rating__input" id="star-6" type="radio" name="rating" value="6"/>
          <label className="rating__label" htmlFor="star-6">Rating 6</label>

          <input className="rating__input" id="star-7" type="radio" name="rating" value="7" />
          <label className="rating__label" htmlFor="star-7">Rating 7</label>

          <input className="rating__input" id="star-8" type="radio" name="rating" value="8"/>
          <label className="rating__label" htmlFor="star-8">Rating 8</label>

          <input className="rating__input" id="star-9" type="radio" name="rating" value="9" />
          <label className="rating__label" htmlFor="star-9">Rating 9</label>

          <input className="rating__input" id="star-10" type="radio" name="rating" value="10" />
          <label className="rating__label" htmlFor="star-10">Rating 10</label>
        </div>
      </div>

      <div className="add-review__text">
        <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text" min="50" max="400"></textarea>
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit">Post</button>
        </div>
      </div>
    </form>

    {(formError && <p>Что-то пошло не так, попробуйте перезагрузить страницу или проверить ваше подключение к интернету</p>)}
  </React.Fragment>
  );
};

ReviewForm.propTypes = {
  onSubmit: propTypes.func,
  film: propTypes.shape({})
};

const mapStateToProps = (state) => ({
  formError: getFormError(state)
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit(text, rating, film) {
    dispatch(review(text, rating, film));
  }
});


export {ReviewForm};
export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);
