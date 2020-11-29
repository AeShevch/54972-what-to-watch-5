import React, {PureComponent} from "react";
import {DEFAULT_ACTIVE_STAR_INDEX} from "../components/add-review-form/add-review-form";

export const withFormDataToState = (Component) =>
  class WithFormDataToState extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        rating: DEFAULT_ACTIVE_STAR_INDEX + 1,
        reviewText: ``,
      };

      this._handleFieldDataChange = this._handleFieldDataChange.bind(this);
    }

    _handleFieldDataChange(evt) {
      const {name, value} = evt.target;
      this.setState({[name]: value});
    }

    render() {
      return (
        <Component
          {...this.props}
          handleFieldDataChange={this._handleFieldDataChange}
        />
      );
    }
  };
