import PropTypes from 'prop-types';

export default PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      poster_image: PropTypes.string,
      preview_image: PropTypes.string,
      background_image: PropTypes.string,
      background_color: PropTypes.string,
      video_link: PropTypes.string,
      preview_video_link: PropTypes.string,
      description: PropTypes.string,
      rating: PropTypes.number,
      scores_count: PropTypes.number,
      director: PropTypes.string,
      starring: PropTypes.arrayOf(PropTypes.string),
      run_time: PropTypes.number,
      genre: PropTypes.string,
      released: PropTypes.number,
      is_favorite: PropTypes.bool,
    })
);
