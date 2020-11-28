import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreater} from "../../store/action";
import moviesListProp from "../small-movie-card/small-movie-card.prop";

const GenresList = (props) => {
  const {currentGenre, movies, changeGenre, setFilteredMovies} = props;

  const genres = movies.reduce((result, movie) =>
    result.add(movie.genre), new Set([`All genres`]));

  const genresLinkClickHandler = (evt) => {
    evt.preventDefault();

    const newGenre = evt.currentTarget.textContent;
    changeGenre(newGenre);
    setFilteredMovies();
  };

  return (
    <ul className="catalog__genres-list">
      {Array.from(genres).map((genre) => (
        <li
          className={`catalog__genres-item ${genre === currentGenre ? `catalog__genres-item--active` : ``}`}
          key={`list-item-${genre}`}
        >
          <a
            href="#" type="button"
            onClick={genresLinkClickHandler}
            className="catalog__genres-link"
          >
            {genre}
          </a>
        </li>
      ))}
    </ul>
  );
};

const mapStateToProps = (state) => ({
  movies: state.movies,
  currentGenre: state.filterGenre,
});

const mapDispatchToProps = (dispatch) => ({
  changeGenre(genre) {
    dispatch(ActionCreater.changeGenreAction(genre));
  },
  setFilteredMovies() {
    dispatch(ActionCreater.setFilteredMovies());
  }
});

GenresList.propTypes = {
  currentGenre: PropTypes.string.isRequired,
  movies: PropTypes.arrayOf(PropTypes.shape(moviesListProp)).isRequired,
  changeGenre: PropTypes.func.isRequired,
  setFilteredMovies: PropTypes.func.isRequired,
};

export {GenresList};
export default connect(mapStateToProps, mapDispatchToProps)(GenresList);
