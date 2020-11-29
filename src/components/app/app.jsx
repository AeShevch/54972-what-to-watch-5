import React from "react";
import PropTypes from "prop-types";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {connect} from "react-redux";

import MainPage from "../main-page/main-page";
import SignInPage from "../sign-in-page/sign-in-page";
import MylistPage from "../mylist-page/mylist-page";
import ReviewPage from "../review-page/review-page";
import PlayerPage from "../player-page/player-page";
import CurrentMoviePage from "../currentMoviePage/currentMoviePage";

import moviesProp from "../movie-card/movie-card.prop";
import reviewProp from "../review/review.prop";

const App = ({movies, reviews}) => {
  return (
    <BrowserRouter>
      <Switch>

        <Route path="/" exact>
          <MainPage movies={movies} />
        </Route>

        <Route path="/sign-in" exact>
          <SignInPage/>
        </Route>

        <Route path="/mylist" exact>
          <MylistPage movies={movies} />
        </Route>

        <Route
          path="/films/:id"
          exact
          render={
            ({match: {params: {id}}}) =>
              <CurrentMoviePage
                pageId={id}
                movies={movies}
                reviews={reviews}
              />}
        />

        <Route path="/films/:id/review" exact>
          <ReviewPage/>
        </Route>

        <Route path="/player/:id" exact>
          <PlayerPage/>
        </Route>

      </Switch>
    </BrowserRouter>
  );
};

const mapStateToProps = (state) => ({
  movies: state.movies
});

App.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape(moviesProp)).isRequired,
  reviews: PropTypes.arrayOf(PropTypes.shape(reviewProp)),
};

export default connect(mapStateToProps)(App);
