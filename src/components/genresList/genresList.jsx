import React from "react";
import {connect} from "react-redux";
import {ActionCreater} from "../../store/action";

const GenresList = (props) => {
  const {items, currentGenre, movies, changeGenre, getFilteredMovies} = props;

  const genresLinkClickHandler = (evt) => {
    const newGenre = evt.currentTarget.textContent;
    changeGenre(newGenre);
    getFilteredMovies();
  };

  return (
    <ul className="catalog__genres-list">
      {items.map((genre) => (
        <li className={`catalog__genres-item ${genre === currentGenre ? `catalog__genres-item--active` : `` }`}
          key={`list-item-${genre}`}>
          <a href="#" type="button"
            onClick={genresLinkClickHandler}
            className="catalog__genres-link">
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
  getFilteredMovies() {
    dispatch(ActionCreater.getFilteredMovies());
  }
});

export {GenresList};
export default connect(mapStateToProps, mapDispatchToProps)(GenresList);
