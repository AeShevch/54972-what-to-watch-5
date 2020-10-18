import React from "react";
import PropTypes from "prop-types";
import MoviesList from "../../components/movies-list/movies-list";
import movieProp from "../../components/movie-card/movie-card.prop";
import Footer from "../../components/footer/footer";
import Logo from "../../components/logo/logo";
import UserBlock from "../../components/user-block/user-block";

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
