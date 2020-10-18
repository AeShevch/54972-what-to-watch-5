import React from "react";
import ReactDom from "react-dom";
import App from "./components/app/app";
import movies from "./mocks/films";
import reviews from "./mocks/reviews";

ReactDom.render(
  <App movies={movies} reviews={reviews}/>,
  document.getElementById(`root`),
);
