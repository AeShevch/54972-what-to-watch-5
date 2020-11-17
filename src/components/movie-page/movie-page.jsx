import React, {Fragment} from "react";
import PropTypes from "prop-types";
import MovieCard from "../movie-card/movie-card";
import MoviesList from "../movies-list/movies-list";
import movieCardProp from "../movie-card/movie-card.prop";
import Footer from "../footer/footer";

const MoviePage = (props) => {
  const {movieInfo, related} = props;

  return (
    <Fragment>
      <MovieCard {...movieInfo} />
      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <MoviesList movies={related}/>
        </section>
        <Footer/>
      </div>
    </Fragment>
  );
};

MoviePage.propTypes = {
  movieInfo: PropTypes.shape(movieCardProp).isRequired,
  related: PropTypes.arrayOf(PropTypes.shape(movieCardProp)).isRequired,
};

export default MoviePage;
