import React, { Component } from 'react';

class VideoPlayerInfo extends Component {

  render() {
    const { title, statisticsInfo } = this.props;
    return (
      <div data-testid='videoinfo' className="video-info">
        <h1 className="title">
          {title}
        </h1>
        <div className="video-toolbar">
          <span className="video-views">
            {statisticsInfo.viewCount} views
        </span>
          <span className="right-menu">
            <div className="thumb-wrapper">
              <button className="thumb-up-btn">
                <i className="material-icons">thumb_up</i>
                <span className="thumbs-count">
                  {statisticsInfo.likeCount}
                </span>
              </button>

              <button className="thumb-down-btn">
                <i className="material-icons">thumb_down</i>
                <span className="thumbs-count">
                  {statisticsInfo.dislikeCount}
                </span>
              </button>
            </div>

            <button className="share-btn">
              <i className="material-icons">reply</i>
              <span>SHARE</span>
            </button>

            <button className="save-btn">
              <i className="material-icons">playlist_add</i>
              <span>SAVE</span>
            </button>
            <button className="options-btn">
              <i className="material-icons">more_horiz</i>
            </button>
          </span>
        </div>
      </div>
    );
  }
}

export default VideoPlayerInfo;