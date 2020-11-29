import React from "react";
import PropTypes from "prop-types";
import MoviePage from "../movie-page/movie-page";
import moviesListProp from "../small-movie-card/small-movie-card.prop";
import reviewProp from "../review/review.prop";

const RELATED_MOVIES_COUNT = 4;

const CurrentMoviePage = ({pageId, reviews, movies}) => {
  const [currentMovie] = movies.filter((movie) => movie.id === pageId);
  const relatedMovies = movies.filter((movie) => movie.genre === currentMovie.genre);
  const movieInfo = Object.assign({}, currentMovie, {reviews});

  return (
    <MoviePage
      movieInfo={movieInfo}
      related={relatedMovies.slice(0, RELATED_MOVIES_COUNT)}
    />);
};

CurrentMoviePage.propTypes = {
  pageId: PropTypes.string.isRequired,
  movies: PropTypes.arrayOf(PropTypes.shape(moviesListProp)).isRequired,
  reviews: PropTypes.arrayOf(PropTypes.shape(reviewProp)),
};

export default CurrentMoviePage;
