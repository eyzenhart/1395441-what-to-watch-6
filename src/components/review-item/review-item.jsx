import React from 'react';
import propTypes from 'prop-types';

const ReviewItem = ({comment}) => {

  const dates = ['January', 'February', 'March', 'April', 'May', 'Juny', 'July', 'August', 'September', 'October', 'November', 'December'];

  const date = new Date(comment.date)

  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{comment.comment}</p>

        <footer className="review__details">
          <cite className="review__author">{comment.user.name}</cite>
          <time className="review__date" dateTime={comment.date}>{dates[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear()}</time>
        </footer>
      </blockquote>
    </div>
  )
};

ReviewItem.propTypes = {
  comment: propTypes.shape({
    id: propTypes.number,
    user: propTypes.shape({}),
    comment: propTypes.string,
    date: propTypes.string,
  })
};

export default ReviewItem;
