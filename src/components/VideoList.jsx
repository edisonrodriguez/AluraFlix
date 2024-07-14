/*import React from 'react';
import VideoCard from './VideoCard';

const VideoList = ({ videos, deleteVideo, openEditModal }) => {
  return (
    <div className="video-list">
      {videos.map(video => (
        <VideoCard 
          key={video.id} 
          video={video} 
          deleteVideo={deleteVideo} 
          openEditModal={openEditModal} 
        />
      ))}
    </div>
  );
};

export default VideoList;
*/

import React from 'react';
import VideoCard from './VideoCard';

const VideoList = ({ videos, deleteVideo, openEditModal }) => {
  return (
    <div className="video-list">
      {videos.map(video => (
        <VideoCard 
          key={video.id} 
          video={video} 
          deleteVideo={deleteVideo} 
          openEditModal={openEditModal} 
        />
      ))}
    </div>
  );
};

export default VideoList;
