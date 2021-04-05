import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {fetchComments} from '../../store/api-actions';
import {getComments} from '../../store/app-data/selectors';
import ReviewItem from '../review-item/review-item';
import propTypes from 'prop-types';


const MoviePageReviews = ({comments, onLoadComments, film}) => {

  useEffect(() => {
    if (film.id) {
      onLoadComments(film.id);
    }
  }, [film.id]);


  return (
    <div className="movie-card__reviews movie-card__row">
      <div className="movie-card__reviews-col">

        {comments.map((comment) => <ReviewItem comment = {comment}/>)}

      </div>
    </div>
  )
};

const mapStateToProps = (state) => ({
  comments: getComments(state)
});

const mapDispatchToProps = (dispatch) => ({
  onLoadComments(id) {
    dispatch(fetchComments(id))
  }
});

MoviePageReviews.propTypes = {
  comments: propTypes.arrayOf(propTypes.shape),
  onLoadComments: propTypes.func,
  film: propTypes.shape({
    id: propTypes.number
  })

}

export {MoviePageReviews};
export default connect(mapStateToProps, mapDispatchToProps)(MoviePageReviews);
