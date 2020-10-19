import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import SmallMovieCard from "../small-movie-card/small-movie-card";
import moviesListProp from "../small-movie-card/small-movie-card.prop";

export default class MoviesList extends PureComponent {
  constructor(props) {
    super(props);

    this._movieCardMouseLeaveHandle = this._movieCardMouseLeaveHandle.bind(this);
    this._movieCardMouseOverHandle = this._movieCardMouseOverHandle.bind(this);

    this.state = {
      activeMovieIndex: `-1`,
    };

  }

  _movieCardMouseLeaveHandle() {
    this.setState({
      activeMovieIndex: `-1`,
    });
    clearTimeout(this._timeout);
  }

  _movieCardMouseOverHandle(evt) {
    evt.persist();
    const currentIndex = +evt.currentTarget.dataset.cardIndex;
    this._timeout = setTimeout(
        () => {
          this.setState({
            activeMovieIndex: currentIndex,
          });
        }, 1000);
  }

  render() {
    const {movies} = this.props;
    const {activeMovieIndex} = this.state;
    return (
      <div className="catalog__movies-list">
        {
          movies.map((movie, index) => (
            <SmallMovieCard
              key={movie.id}
              isActive={activeMovieIndex === index}
              movieCardMouseLeaveHandle={this._movieCardMouseLeaveHandle}
              movieCardMouseOverHandle={this._movieCardMouseOverHandle}
              index={index}
              {...movie}
            />
          ))
        }
      </div>
    );
  }
}

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape(moviesListProp)).isRequired,
};

