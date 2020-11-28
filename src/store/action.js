export const ActionType = {
  CHANGE_FILTER_GENRE: `CHANGE_FILTER_GENRE`,
  SET_FILTERED_MOVIES: `SET_FILTERED_MOVIES`,
  SET_MOVIES_TO_SHOW_COUNT: `SET_MOVIES_TO_SHOW_COUNT`,
};

export const ActionCreater = {
  changeGenreAction: (newGenre) => ({
    type: ActionType.CHANGE_FILTER_GENRE,
    payload: newGenre,
  }),
  setFilteredMoviesAction: () => ({
    type: ActionType.SET_FILTERED_MOVIES,
  }),
  setMoviesToShowCountAction: (maxMoviesCount) => ({
    type: ActionType.SET_MOVIES_TO_SHOW_COUNT,
    payload: maxMoviesCount,
  })
};
