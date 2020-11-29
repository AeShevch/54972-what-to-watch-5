import React, {PureComponent} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import SmallMovieCard from "../small-movie-card/small-movie-card";
import moviesListProp from "../small-movie-card/small-movie-card.prop";
import {withOneActiveElement} from "../../hocs/withOneActiveElement";

const MS_DELAY_TO_PLAY_VIDEO = 1000;
const FIRST_MOVIE_INDEX = 0;

class MoviesList extends PureComponent {
  constructor(props) {
    super(props);

    this._handleActiveChange = this.props.handleActiveChange;
    this._setActivityToDefault = this.props.setActivityToDefault;

    this._movieCardMouseLeaveHandle = this._movieCardMouseLeaveHandle.bind(this);
    this._movieCardMouseOverHandle = this._movieCardMouseOverHandle.bind(this);

  }

  componentWillUnmount() {
    clearTimeout(this._timeout);
  }

  _getTimeoutToPlayVideo(movieCardIndex) {
    return setTimeout(
        () => {
          this._handleActiveChange(movieCardIndex);
        }, MS_DELAY_TO_PLAY_VIDEO);
  }

  _movieCardMouseLeaveHandle() {
    this._setActivityToDefault();
    clearTimeout(this._timeout);
  }

  _movieCardMouseOverHandle(evt) {
    this._timeout = this._getTimeoutToPlayVideo(+evt.currentTarget.dataset.cardIndex);
  }

  render() {
    const {movies} = this.props;
    const {activeElementIndex} = this.props;

    return (
      <div className="catalog__movies-list">
        {
          movies.map((movie, index) => (
            <SmallMovieCard
              key={movie.id}
              isActive={activeElementIndex === index}
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

const mapStateToProps = (state) => ({
  movies: state.filteredMovies.slice(FIRST_MOVIE_INDEX, state.maxMoviesShownCount),
});

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape(moviesListProp)).isRequired,
  handleActiveChange: PropTypes.func.isRequired,
  setActivityToDefault: PropTypes.func.isRequired,
  activeElementIndex: PropTypes.number.isRequired,
};

export {MoviesList};

export default withOneActiveElement(
    connect(mapStateToProps)(MoviesList)
);
