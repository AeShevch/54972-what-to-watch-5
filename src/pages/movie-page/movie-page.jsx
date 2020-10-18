import React, {Fragment} from "react";
import MovieCard from "../../components/movie-card/movie-card";
import MoviesList from "../../components/movies-list/movies-list";
import moviePageProp from "./movie-page.prop";
import Footer from "../../components/footer/footer";

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

MoviePage.propTypes = moviePageProp;

export default MoviePage;
