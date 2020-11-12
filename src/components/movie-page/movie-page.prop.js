import PropTypes from "prop-types";
import movieProp from "../movie-card/movie-card.prop";

export default {
  movieInfo: PropTypes.shape(movieProp).isRequired,
  related: PropTypes.array.isRequired,
};
