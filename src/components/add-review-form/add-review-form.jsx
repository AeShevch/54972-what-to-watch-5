import React, {PureComponent} from "react";

export default class AddReviewForm extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      rating: `3`,
      reviewText: ``,
    };

    this._handleSubmit = this._handleSubmit.bind(this);
    this._handleChange = this._handleChange.bind(this);
  }

  _handleSubmit(evt) {
    evt.preventDefault();

  }

  _handleChange(evt) {
    const {name, value} = evt.target;
    this.setState({[name]: value});
  }

  render() {
    return (
      <form
        onSubmit={this._handleSubmit}
        className="add-review__form"
      >
        <div className="rating">
          <div className="rating__stars">
            <input
              className="rating__input"
              onChange={this._handleChange}
              id="star-1"
              type="radio"
              name="rating"
              value="1"
            />
            <label className="rating__label" htmlFor="star-1">Rating 1</label>

            <input
              className="rating__input"
              onChange={this._handleChange}
              id="star-2"
              type="radio"
              name="rating"
              value="2"
            />
            <label className="rating__label" htmlFor="star-2">Rating 2</label>

            <input
              className="rating__input"
              onChange={this._handleChange}
              id="star-3"
              type="radio"
              name="rating"
              value="3"
              checked
            />
            <label className="rating__label" htmlFor="star-3">Rating 3</label>

            <input
              className="rating__input"
              onChange={this._handleChange}
              id="star-4"
              type="radio"
              name="rating"
              value="4"
            />
            <label className="rating__label" htmlFor="star-4">Rating 4</label>

            <input
              className="rating__input"
              onChange={this._handleChange}
              id="star-5"
              type="radio"
              name="rating"
              value="5"
            />
            <label className="rating__label" htmlFor="star-5">Rating 5</label>
          </div>
        </div>

        <div className="add-review__text">
          <textarea
            onChange={this._handleChange}
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
  }
}
