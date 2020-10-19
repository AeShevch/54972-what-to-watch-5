import React from "react";
import PropTypes from "prop-types";
import MoviesList from "../movies-list/movies-list";
import movieProp from "../movie-card/movie-card.prop";
import Footer from "../footer/footer";
import Logo from "../logo/logo";
import UserBlock from "../user-block/user-block";

const MylistPage = ({movies}) => {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo/>

        <h1 className="page-title user-page__title">My list</h1>

        <UserBlock/>
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <MoviesList movies={movies}/>
      </section>

      <Footer/>
    </div>
  );
};

MylistPage.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape(movieProp)).isRequired
};

export default MylistPage;
