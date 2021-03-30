import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { fetchComments } from '../../store/api-actions';
import {getComments} from '../../store/app-data/selectors';
import ReviewItem from '../review-item/review-item';


const MoviePageReviews = ({comments, onLoadComments, film}) => {

  // const id = film.id;

  console.log(film.id)


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

export {MoviePageReviews};
export default connect(mapStateToProps, mapDispatchToProps)(MoviePageReviews);
