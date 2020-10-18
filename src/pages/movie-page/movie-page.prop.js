import PropTypes from "prop-types";
import movieProp from "../../components/movie-card/movie-card.prop";

export default Object.assign(
    {},
    movieProp,
    {related: PropTypes.array.isRequired}
);
