export const ActionType = {
  CHANGE_FILTER_GENRE: `CHANGE_FILTER_GENRE`,
  GET_FILTERED_MOVIES: `GET_FILTERED_MOVIES`,
};

export const ActionCreater = {
  changeGenreAction: (newGenre) => ({
    type: ActionType.CHANGE_FILTER_GENRE,
    payload: newGenre,
  }),
  getFilteredMovies: () => ({
    type: ActionType.GET_FILTERED_MOVIES,
  }),
};
