import movies from "../mocks/movies";
import {ActionType} from "./action";
import {extend} from "../utils";

const DEFAULT_GENRE = `All genres`;
const DEFAULT_MOVIES_COUNT = 8;

const initialState = {
  filterGenre: DEFAULT_GENRE,
  filteredMovies: movies,
  maxMoviesShown: DEFAULT_MOVIES_COUNT,
  movies,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_FILTER_GENRE:
      return extend(state, {
        filterGenre: action.payload,
      });
    case ActionType.SET_FILTERED_MOVIES:
      if (state.filterGenre === DEFAULT_GENRE) {
        return extend({}, initialState);
      }

      const filteredMovies = state.movies.filter((movie) => state.filterGenre === movie.genre);
      return extend(state, {filteredMovies});
  }

  return state;
};

export default reducer;
