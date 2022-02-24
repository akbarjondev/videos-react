import './VideoItem.css';
import React from "react";

const VideoItem = ({ video, onVideoSelect }) => {

  const { thumbnails: {medium}, title } = video.snippet

  return (
    <div onClick={() => onVideoSelect(video)} className="video-item">
      <img 
        className='video-image'
        src={medium.url}
        width={medium.width} 
        height={medium.height}
        alt={title}
      />
      <div>{title}</div>
    </div>
  );
}

export default VideoItem;
