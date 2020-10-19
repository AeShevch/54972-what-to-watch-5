import React, {PureComponent} from "react";
import smallMovieProp from "./small-movie-card.prop";
import {Link} from "react-router-dom";
import VideoPlayer from "../videoPlayer/videoPlayer";

export default class SmallMovieCard extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      name,
      posterHorizontal: poster,
      trailer,
      index,
      movieCardMouseLeaveHandle,
      movieCardMouseOverHandle,
      isActive
    } = this.props;

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
            to={`/films/1`}
            className="small-movie-card__link"
          >
            {name}
          </Link>
        </h3>
      </article>
    );
  }
};

SmallMovieCard.propTypes = smallMovieProp;

