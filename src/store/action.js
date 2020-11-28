export const ActionType = {
  CHANGE_FILTER_GENRE: `CHANGE_FILTER_GENRE`,
  SET_FILTERED_MOVIES: `SET_FILTERED_MOVIES`,
};

export const ActionCreater = {
  changeGenreAction: (newGenre) => ({
    type: ActionType.CHANGE_FILTER_GENRE,
    payload: newGenre,
  }),
  setFilteredMovies: () => ({
    type: ActionType.SET_FILTERED_MOVIES,
  }),
};
