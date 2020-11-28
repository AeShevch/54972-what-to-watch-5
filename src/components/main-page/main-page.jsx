import React from "react";
import PropTypes from "prop-types";
import MoviesList from "../movies-list/movies-list";
import movieProp from "../movie-card/movie-card.prop";
import Logo from "../logo/logo";
import UserBlock from "../user-block/user-block";
import Footer from "../footer/footer";
import GenresList from "../genresList/genresList";

const MainPage = ({movies}) => {
  const [currentMovie] = movies;

  return (
    <React.Fragment>
      <section className="movie-card">
        <div className="movie-card__bg">
          <img src={currentMovie.posterBackground} alt="The Grand Budapest Hotel"/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header movie-card__head">
          <Logo/>
          <UserBlock/>
        </header>

        <div className="movie-card__wrap">
          <div className="movie-card__info">
            <div className="movie-card__poster">
              <img
                src={currentMovie.posterVertical}
                alt={currentMovie.name}
                width="218"
                height="327"
              />
            </div>

            <div className="movie-card__desc">
              <h2 className="movie-card__title">{currentMovie.name}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{currentMovie.genre}</span>
                <span className="movie-card__year">{currentMovie.date}</span>
              </p>

              <div className="movie-card__buttons">
                <button className="btn btn--play movie-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"/>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list movie-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"/>
                  </svg>
                  <span>My list</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenresList/>

          <MoviesList/>

          <div className="catalog__more">
            <button className="catalog__button" type="button">Show more</button>
          </div>
        </section>

        <Footer/>

      </div>
    </React.Fragment>
  );
};

MainPage.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape(movieProp)).isRequired,
};

export default MainPage;
