import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {ActionCreater} from "../../store/action";
import {DEFAULT_MOVIES_COUNT} from "../../store/reducer";

const ShowMore = (props) => {
  const {maxMoviesShownCount, setMoviesToShowCount, moviesCount} = props;

  const buttonClickHandler = () =>
    setMoviesToShowCount(maxMoviesShownCount + DEFAULT_MOVIES_COUNT);

  return moviesCount > maxMoviesShownCount ? (
    <div className="catalog__more">
      <button
        className="catalog__button"
        onClick={buttonClickHandler}
        type="button"
      >
        Show more
      </button>
    </div>
  ) : ``;
};

const mapStateToProps = (state) => ({
  maxMoviesShownCount: state.maxMoviesShownCount,
  moviesCount: state.filteredMovies.length,
});

const mapDispatchToProps = (dispatch) => ({
  setMoviesToShowCount(maxMoviesCount) {
    dispatch(ActionCreater.setMoviesToShowCountAction(maxMoviesCount));
  },
});

ShowMore.propTypes = {
  maxMoviesShownCount: PropTypes.number.isRequired,
  moviesCount: PropTypes.number.isRequired,
  setMoviesToShowCount: PropTypes.func.isRequired,
};

export {ShowMore};
export default connect(mapStateToProps, mapDispatchToProps)(ShowMore);
