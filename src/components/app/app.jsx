import React from "react";
import PropTypes from "prop-types";
import {BrowserRouter, Switch, Route} from "react-router-dom";

import MainPage from "../../pages/main-page/main-page";
import SignInPage from "../../pages/sign-in-page/sign-in-page";
import MylistPage from "../../pages/mylist-page/mylist-page";
import MoviePage from "../../pages/movie-page/movie-page";
import ReviewPage from "../../pages/review-page/review-page";
import PlayerPage from "../../pages/player-page/player-page";

import moviesProp from "../movie-card/movie-card.prop";

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
          render={(props) =>
            <MoviePage
              movieInfo={movies[props.match.params.id]}
              related={movies.slice(0, 4)}
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
