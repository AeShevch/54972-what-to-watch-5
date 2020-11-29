import React, {PureComponent} from "react";
import PropTypes from "prop-types";

const EMPTY_INDEX = -1;

export const withOneActiveElement = (Component) => {
  class WithOneActiveElement extends PureComponent {
    constructor(props) {
      super(props);

      this._defaultState = {
        activeElementIndex: props.activeElementIndex ? props.activeElementIndex : EMPTY_INDEX,
      };


      this.state = this._defaultState;

      this._handleActiveChange = this._handleActiveChange.bind(this);
      this._setActivityToDefault = this._setActivityToDefault.bind(this);
    }

    _handleActiveChange(index) {
      this.setState({
        activeElementIndex: index,
      });
    }

    _setActivityToDefault() {
      this.setState(this._defaultState);
    }

    render() {
      return (
        <Component
          {...this.props}
          activeElementIndex={this.state.activeElementIndex}
          handleActiveChange={this._handleActiveChange}
          setActivityToDefault={this._setActivityToDefault}
        />
      );
    }
  }

  WithOneActiveElement.propTypes = {
    activeElementIndex: PropTypes.number
  };

  return WithOneActiveElement;
};
