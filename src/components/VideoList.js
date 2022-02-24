import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelect }) => {

  const renderedList = videos.map(video => <VideoItem onVideoSelect={onVideoSelect} key={video.id.videoId} video={video} />)

  return (
    <div className="video-list">
      {renderedList}
    </div>
  );
}

export default VideoList;
