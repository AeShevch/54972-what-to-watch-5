import React from "react";
import PropTypes from "prop-types";
import {BrowserRouter, Switch, Route} from "react-router-dom";

import MainPage from "../main-page/main-page";
import SignInPage from "../sign-in-page/sign-in-page";
import MylistPage from "../mylist-page/mylist-page";
import MoviePage from "../movie-page/movie-page";
import ReviewPage from "../review-page/review-page";
import PlayerPage from "../player-page/player-page";

import moviesProp from "../movie-card/movie-card.prop";

const RELATED_MOVIES_COUNT = 4;

const App = ({movies, reviews}) => {
  return (
    <BrowserRouter>
      <Switch>

        <Route path="/" exact>
          <MainPage
            movies={movies}
          />
        </Route>

        <Route path="/sign-in" exact>
          <SignInPage/>
        </Route>

        <Route path="/mylist" exact>
          <MylistPage
            movies={movies}
          />
        </Route>

        <Route
          path="/films/:id"
          exact
          render={({match: {params: {id}}}) =>
            <MoviePage
              movieInfo={movies[id]}
              reviews={reviews}
              related={movies.slice(0, RELATED_MOVIES_COUNT)}
            />
          }
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

App.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape(moviesProp)).isRequired,
  reviews: PropTypes.array.isRequired,
};

export default App;
