import React from "react";
import smallMovieProp from "./small-movie-card.prop";
import {Link} from "react-router-dom";
import VideoPlayer from "../videoPlayer/videoPlayer";

const SmallMovieCard = (props) => {
  const {
    id,
    name,
    posterHorizontal: poster,
    trailer,
    index,
    movieCardMouseLeaveHandle,
    movieCardMouseOverHandle,
    isActive
  } = props;

  return (
    <article
      className="small-movie-card catalog__movies-card"
      data-card-index={index}
      onMouseOver={movieCardMouseOverHandle}
      onMouseLeave={movieCardMouseLeaveHandle}
    >
      <div className="small-movie-card__image">
        {isActive
          ? <VideoPlayer trailer={trailer} poster={poster}/>
          : <img alt={name} src={poster}/>
        }
      </div>
      <h3 className="small-movie-card__title">
        <Link
          to={`/films/${id}`}
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
