import React, { useState } from 'react';
import VideoModal from './VideoModal';
import { FaEdit, FaTrash } from 'react-icons/fa'; // Asegúrate de tener react-icons instalado

const VideoCard = ({ video, deleteVideo, openEditModal }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const openVideoModal = () => {
    setIsVideoModalOpen(true);
  };

  const closeVideoModal = () => {
    setIsVideoModalOpen(false);
  };

  return (
    <div 
      className="video-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h3>{video.title}</h3>
      <div className="video-thumbnail" onClick={openVideoModal}>
        {isHovered ? (
          <iframe
            width="100%"
            height="100%"
            src={video.url}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={video.title}
          ></iframe>
        ) : (
          <img src={video.thumbnail} alt={video.title} />
        )}
      </div>
      <p>{video.description}</p>
      <div className="buttons">
        <button onClick={() => openEditModal(video)}>
          <FaEdit />
        </button>
        <button onClick={() => deleteVideo(video.id)}>
          <FaTrash />
        </button>
      </div>

      {isVideoModalOpen && (
        <VideoModal videoUrl={video.url} closeModal={closeVideoModal} />
      )}
    </div>
  );
};

export default VideoCard;

