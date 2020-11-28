import movies from "../mocks/movies";
import {ActionType} from "./action";
import {extend} from "../utils";

const DEFAULT_GENRE = `All genres`;

const initialState = {
  filterGenre: DEFAULT_GENRE,
  movies,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_FILTER_GENRE:
      return extend(state, {
        filterGenre: action.payload,
      });
    case ActionType.GET_FILTERED_MOVIES:
      if (action.payload === DEFAULT_GENRE) {
        return extend({}, initialState);
      }

      const filteredMovies = state.movies.filter((movie) => state.filterGenre === movie.genre);
      return extend(state, {
        movies: filteredMovies,
      });
  }

  return state;
};

export default reducer;
