import React from "react";
import PropTypes from "prop-types";
import reviewsProp from "../review/review.prop";
import Review from "../review/review";

const TabContentReviews = (props) => {
  const {reviews} = props;
  const reviewsByColumns = reviews.reduce((resultArr, currentReview, i) => {
    if (i % 2 === 0) {
      return [
        resultArr[0],
        [...resultArr[1], currentReview]
      ];
    }

    return [
      [...resultArr[0], currentReview],
      resultArr[1]
    ];
  }, [[], []]);

  return (
    <div className="movie-card__reviews movie-card__row">
      {reviewsByColumns.map((column, i) => (
        <div className="movie-card__reviews-col" key={`col-${i}`}>
          {column.map((review) => <Review {...review} key={review.text}/>)}
        </div>
      ))}
    </div>
  );
};

TabContentReviews.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.shape(reviewsProp))
};

export default TabContentReviews;
