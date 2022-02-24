import React from "react";

const VideoItem = ({ video }) => {

  const { thumbnails: {medium}, title } = video.snippet

  return (
    <div>
      <img 
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
