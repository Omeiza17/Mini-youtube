import React from 'react';

const VideoDetail = ({video}) => {
  if (!video) {
    return <div>Loading...</div>
  }
  // noinspection JSUnresolvedVariable
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  // noinspection JSUnresolvedVariable
  return (
      <div>
        <div className="ui embed">
          <iframe src={videoSrc} frameBorder="0" title="video player"/>
        </div>
        <div className="ui segment">
          <h4 className="ui header">{video.snippet.title}</h4>
          <p>{video.snippet.description}</p>
        </div>
      </div>
  );
};

export default VideoDetail;
