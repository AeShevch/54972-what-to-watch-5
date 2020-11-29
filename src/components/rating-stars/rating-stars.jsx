import React from "react";
import Star from "../star/star";
import {withOneActiveElement} from "../../hocs/withOneActiveElement";

const STARS_COUNT = 5;

const RatingStars = (props) => {
  const {
    activeElementIndex,
    handleActiveChange,
    handleFieldDataChange
  } = props;

  return (
    <div className="rating">
      <div className="rating__stars">
        {new Array(STARS_COUNT).fill(``).map((value, index) =>
          <Star
            key={`star-${index}`}
            index={index}
            handleChange={(evt) => {
              handleFieldDataChange(evt);
              handleActiveChange(index);
            }}
            isActive={index === activeElementIndex}
          />)}
      </div>
    </div>
  );
};

export default withOneActiveElement(RatingStars);
