import React from "react";
import PropTypes from "prop-types";
import RatingStars from "../rating-stars/rating-stars";
import {withFormDataToState} from "../../hocs/withFormDataToState";

export const DEFAULT_ACTIVE_STAR_INDEX = 2;

const AddReviewForm = ({handleFieldDataChange}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="add-review__form"
    >
      <RatingStars
        handleFieldDataChange={handleFieldDataChange}
        activeElementIndex={DEFAULT_ACTIVE_STAR_INDEX}
      />

      <div className="add-review__text">
        <textarea
          onChange={handleFieldDataChange}
          className="add-review__textarea"
          name="reviewText"
          id="review-text"
          placeholder="ReviewPage text"
        />
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit">Post</button>
        </div>

      </div>
    </form>
  );
};

AddReviewForm.propTypes = {
  handleFieldDataChange: PropTypes.func.isRequired
};

export default withFormDataToState(AddReviewForm);
