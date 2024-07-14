import React from 'react';

const VideoModal = ({ videoUrl, closeModal }) => {
  return (
    <div className="modal">
      <div className="modal-content video-modal-content">
        <span className="close" onClick={closeModal}>&times;</span>
        <iframe
          width="100%"
          height="100%"
          src={videoUrl}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Video"
        ></iframe>
      </div>
    </div>
  );
};

export default VideoModal;
