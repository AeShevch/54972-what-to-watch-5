import movies from "../mocks/movies";
import {ActionType} from "./action";
import {extend} from "../utils";

const initialState = {
  filterGenre: null,
  movies
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_FILTER_GENRE:
      return extend(state, {
        filterGenre: action.payload
      });
    case ActionType.GET_FILTERED_MOVIES:
      return state.movies;
  }

  return state;
}

export default reducer;
