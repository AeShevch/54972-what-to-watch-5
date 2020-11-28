import PropTypes from "prop-types";
import smallMovieCardProp from "../small-movie-card/small-movie-card.prop";
import reviewProp from "../review/review.prop";

const extendedMovieProp = {
  id: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  posterVertical: PropTypes.string.isRequired,
  posterBackground: PropTypes.string.isRequired,
  rating: PropTypes.shape({
    value: PropTypes.string.isRequired,
    string: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
  }).isRequired,
  description: PropTypes.string.isRequired,
  director: PropTypes.string.isRequired,
  starring: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  reviews: PropTypes.arrayOf(PropTypes.shape(reviewProp))
};

export default Object.assign({}, smallMovieCardProp, extendedMovieProp);
