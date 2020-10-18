import React from "react";
import smallMovieProp from "./small-movie-card.prop";
import {Link} from "react-router-dom";

const SmallMovieCard = ({name, posterHorizontal}) => {
  return (
    <article className="small-movie-card catalog__movies-card">
      <div className="small-movie-card__image">
        <img
          src={posterHorizontal}
          alt={name}
          width="280" height="175"
        />
      </div>
      <h3 className="small-movie-card__title">
        <Link
          to={`/films/1`}
          className="small-movie-card__link"
        >
          {name}
        </Link>
      </h3>
    </article>
  );
};

SmallMovieCard.propTypes = smallMovieProp;

export default SmallMovieCard;
