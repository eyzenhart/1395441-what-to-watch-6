import React from 'react';

const ReviewItem = ({comment}) => {
  return (
    <blockquote className="review__quote">
      <p className="review__text">{comment.comment}</p>

      <footer className="review__details">
        <cite className="review__author">{comment.user.name}</cite>
        <time className="review__date" dateTime="2016-12-24">December 24, 2016</time>
      </footer>
    </blockquote>
  )
};

export default ReviewItem;
