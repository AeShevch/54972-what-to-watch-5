import React from "react";
import movieCardProp from "./movie-card.prop";
import Logo from "../logo/logo";
import UserBlock from "../user-block/user-block";
import {Link} from "react-router-dom";
import Tabs from "../tabs/tabs";
import TabContentDetails from "../tab-content-details/tab-content-details";
import TabContentReviews from "../tab-content-reviews/tab-content-reviews";
import TabContentMain from "../tab-content-main/tab-content-main";

const MovieCard = (props) => {
  const {id, name, genre, date, posterBackground, posterVertical} = props;

  const CURRENT_PATH = `/films/${id}`;
  const DETAILS_TAB_URL = `${CURRENT_PATH}#details`;
  const REVIEWS_TAB_URL = `${CURRENT_PATH}#reviews`;

  const tabsItems = [
    {
      title: `Overview`,
      link: CURRENT_PATH,
      component: TabContentMain,
    },
    {
      title: `Details`,
      link: DETAILS_TAB_URL,
      component: TabContentDetails,
    },
    {
      title: `Reviews`,
      link: REVIEWS_TAB_URL,
      component: TabContentReviews,
    },
  ];

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
            <Tabs movieData={props} tabsItems={tabsItems}/>
          </div>
        </div>
      </div>
    </section>
  );
};

MovieCard.propTypes = movieCardProp;

export default MovieCard;
