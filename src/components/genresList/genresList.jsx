import React from "react";
import {connect} from "react-redux";
import {ActionCreater} from "../../store/action";

const GenresList = (props) => {
  const {currentGenre, movies} = props;
  const genres = movies.reduce((result, movie) => {
    return result.add(movie.genre);
  }, new Set([`All genres`])
  );

  return (
    <ul className="catalog__genres-list">
      {Array.from(genres).map((genre) => (
        <li className={`catalog__genres-item ${genre === currentGenre ? `catalog__genres-item--active` : `` }`}
          key={`list-item-${genre}`}>
          <a href="#" type="button"
             onClick={}
             className="catalog__genres-link">
            {genre}
          </a>
        </li>
      ))}
    </ul>
  );
}
;

const mapStateToProps = (state) => ({
  movies: state.movies,
  currentGenre: state.filterGenre,
});

const mapDispatchToProps = (dispatch) => ({
  changeGenre() {
      dispatch(ActionCreater.changeGenreAction())
  }
});

export default connect(mapStateToProps)(GenresList);
