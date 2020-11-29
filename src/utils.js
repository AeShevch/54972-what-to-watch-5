export const extend = (a, b) => Object.assign({}, a, b);

export const compose = (...funcs) => (args) =>
  funcs.reduce((prev, current) => current(prev), args);
