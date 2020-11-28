import React from "react";
import PropTypes from "prop-types";
import reviewsProp from "../review/review.prop";
import Review from "../review/review";

const TabContentReviews = (props) => {
  const {reviews} = props;
  const reviewsByColumns = reviews.reduce((resultArr, currentReview, i) => {
    const [firstColumn, secondColumn] = resultArr;

    if (i % 2 === 0) {
      return [
        firstColumn,
        [...secondColumn, currentReview]
      ];
    }

    return [
      [...firstColumn, currentReview],
      secondColumn
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
  reviews: PropTypes.arrayOf(reviewsProp)
};

export default TabContentReviews;
