import PropTypes from 'prop-types';

export default PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      src: PropTypes.string,
      alt: PropTypes.string,
      video: PropTypes.string
    })
);
