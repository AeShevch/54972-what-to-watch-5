import React from "react";
import reviewsProp from "./review.prop";

// date example November 18, 2015

const Review = (props) => {
  const {text, author, date, rating} = props;
  const formattedTime = new Date(date).toLocaleDateString();

  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{text}</p>

        <footer className="review__details">
          <cite className="review__author">{author}</cite>
          <time className="review__date" dateTime="2016-12-24">{formattedTime}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{rating}</div>
    </div>
  );
};

Review.propTypes = reviewsProp;

export default Review;
