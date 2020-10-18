import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import SmallMovieCard from "../small-movie-card/small-movie-card";
import moviesListProp from "../small-movie-card/small-movie-card.prop";

export default class MoviesList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeMovieIndex: 0,
    };
  }

  render() {
    const {movies} = this.props;
    return (
      <div className="catalog__movies-list">
        {movies.map((movie) => <SmallMovieCard key={movie.id} {...movie}/>)}
      </div>
    );
  }
}

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape(moviesListProp)).isRequired,
};

