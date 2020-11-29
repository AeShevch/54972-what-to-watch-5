import React, {PureComponent} from "react";

export const withVideoPlayer = (Component) =>
  class WithVideoPlayer extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isPlaying: true
      };

      this._handlePlayingChange = this._handlePlayingChange.bind(this);
    }

    _handlePlayingChange() {
      this.setState(
          (prevState) => ({isPlaying: !prevState.isPlaying})
      );
    }

    _handleFullScreenClick(videoElement) {
      videoElement.requestFullscreen();
    }

    render() {
      return (
        <Component
          {...this.props}
          isPlaying={this.state.isPlaying}
          handlePlayingChange={this._handlePlayingChange}
        />
      );
    }
  };
