import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";

export default class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this._videoRef = createRef();
  }

  componentDidMount() {
    const video = this._videoRef.current;
    video.play();
  }

  render() {
    const {trailer, poster} = this.props;
    return (
      <video
        ref={this._videoRef}
        src={trailer}
        poster={poster}
        controls={false}
        preload="none"
        muted={true}
        loop={true}
        width="280" height="175"
      />
    );
  }
};

VideoPlayer.propTypes = {
  trailer: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};
