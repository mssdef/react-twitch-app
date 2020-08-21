import React from 'react';

const VideoDetail = ({video}) => {
  if (!video) {
    return <div className="video-detail">Loading...</div>
  }

  const VideoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;


  return <div className="video-detail">
    <div className="ui embed">
      <iframe title="video player" src={VideoSrc} />
    </div>
    <div className="ui segment">
      <h4 className="title">{video.snippet.title}</h4>
      <p>{video.snippet.description}</p>
    </div>
  </div>
}

export default VideoDetail;
