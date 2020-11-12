import React, {Fragment} from "react";
import parse from 'html-react-parser';
import movieCardProp from "../movie-card/movie-card.prop";

const TabContentMain = (props) => {
  const {rating, description, director, starring} = props;

  return (
    <Fragment>
      <div className="movie-rating">
        <div className="movie-rating__score">{rating.value}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{rating.string}</span>
          <span className="movie-rating__count">{rating.count} ratings</span>
        </p>
      </div>
      <div className="movie-card__text">
        {parse(description)}

        <p className="movie-card__director">
          <strong>Director: {director}</strong>
        </p>

        <p className="movie-card__starring">
          <strong>
            {starring.join(`, `)}
          </strong>
        </p>
      </div>
    </Fragment>
  );
};

TabContentMain.propTypes = movieCardProp;

export default TabContentMain;
