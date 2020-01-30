import React from 'react';
import VideoBox from './VideoBox';


const VideoContainer = ({ videos, loading}) => {
  if(loading) {
    return <h2>Loading...</h2>
  }

    return <ul className="list-group mb-4">
      {videos.map(video => (
        <VideoBox key={video.id} video={video} />
      ))}
    </ul>
  }

export default VideoContainer;
