import React from "react";
import movieCardProp from "./movie-card.prop";
import Logo from "../logo/logo";
import UserBlock from "../user-block/user-block";
import {Link} from "react-router-dom";

const MovieCard = (props) => {
  const {name, genre, date, posterBackground, posterVertical, rating, description, director, starring} = props;

  return (
    <section className="movie-card movie-card--full">
      <div className="movie-card__hero">
        <div className="movie-card__bg">
          <img src={posterBackground} alt={name}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header movie-card__head">
          <Logo/>
          <UserBlock/>
        </header>

        <div className="movie-card__wrap">
          <div className="movie-card__desc">
            <h2 className="movie-card__title">{name}</h2>
            <p className="movie-card__meta">
              <span className="movie-card__genre">{genre}</span>
              <span className="movie-card__year">{date}</span>
            </p>

            <div className="movie-card__buttons">
              <button className="btn btn--play movie-card__button" type="button">
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
                <span>Play</span>
              </button>
              <button className="btn btn--list movie-card__button" type="button">
                <svg viewBox="0 0 19 20" width="19" height="20">
                  <use xlinkHref="#add"></use>
                </svg>
                <span>My list</span>
              </button>
              <Link to={`/films/1/review`} className="btn movie-card__button">Add review</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="movie-card__wrap movie-card__translate-top">
        <div className="movie-card__info">
          <div className="movie-card__poster movie-card__poster--big">
            <img
              src={posterVertical}
              alt={name}
              width="218"
              height="327"
            />
          </div>

          <div className="movie-card__desc">
            <nav className="movie-nav movie-card__nav">
              <ul className="movie-nav__list">
                <li className="movie-nav__item movie-nav__item--active">
                  <a href="#" className="movie-nav__link">Overview</a>
                </li>
                <li className="movie-nav__item">
                  <a href="#" className="movie-nav__link">Details</a>
                </li>
                <li className="movie-nav__item">
                  <a href="#" className="movie-nav__link">Reviews</a>
                </li>
              </ul>
            </nav>

            <div className="movie-rating">
              <div className="movie-rating__score">{rating.value}</div>
              <p className="movie-rating__meta">
                <span className="movie-rating__level">{rating.string}</span>
                <span className="movie-rating__count">{rating.count} ratings</span>
              </p>
            </div>

            <div className="movie-card__text">
              {description}

              <p className="movie-card__director">
                <strong>Director: {director}</strong>
              </p>

              <p className="movie-card__starring">
                <strong>
                  {starring.join(`, `)}
                </strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

MovieCard.propTypes = movieCardProp;

export default MovieCard;
