import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import SmallMovieCard from "../small-movie-card/small-movie-card";
import moviesListProp from "../small-movie-card/small-movie-card.prop";

const EMPTY_INDEX = -1;
const MS_DELAY_TO_PLAY_VIDEO = 1000;

export default class MoviesList extends PureComponent {
  constructor(props) {
    super(props);

    this._movieCardMouseLeaveHandle = this._movieCardMouseLeaveHandle.bind(this);
    this._movieCardMouseOverHandle = this._movieCardMouseOverHandle.bind(this);

    this._defaultState = {
      activeMovieIndex: EMPTY_INDEX,
    };

    this.state = this._defaultState;
  }

  componentWillUnmount() {
    clearTimeout(this._timeout);
  }

  _getTimeoutToPlayVideo(movieCardIndex) {
    return setTimeout(
        () => {
          this.setState({
            activeMovieIndex: movieCardIndex,
          });
        }, MS_DELAY_TO_PLAY_VIDEO);
  }

  _movieCardMouseLeaveHandle() {
    this.setState(this._defaultState);
    clearTimeout(this._timeout);
  }

  _movieCardMouseOverHandle(evt) {
    evt.persist();
    const currentIndex = +evt.currentTarget.dataset.cardIndex;
    this._timeout = this._getTimeoutToPlayVideo(currentIndex);
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

