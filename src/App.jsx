import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import VideoList from './components/VideoList';
import AddVideoModal from './components/AddVideoModal';
import ClearStorageButton from './components/ClearStorageButton';
import EditVideoModal from './components/EditVideoModal';
import Banner from './components/Banner';
import './App.css';
import Footer from './components/Footer';

const App = () => {
  const getStoredVideos = () => {
    const storedVideos = localStorage.getItem('videos');
    return storedVideos ? JSON.parse(storedVideos) : [];
  };

  const [videos, setVideos] = useState(getStoredVideos());
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);

  useEffect(() => {
    localStorage.setItem('videos', JSON.stringify(videos));
  }, [videos]);

  const addVideo = (video) => {
    setVideos([...videos, { ...video, id: videos.length + 1 }]);
  };

  const deleteVideo = (id) => {
    setVideos(videos.filter(video => video.id !== id));
  };

  const openEditModal = (video) => {
    setCurrentVideo(video);
    setIsEditModalOpen(true);
  };

  const editVideo = (editedVideo) => {
    setVideos(videos.map(video => (video.id === editedVideo.id ? editedVideo : video)));
    setIsEditModalOpen(false);
    setCurrentVideo(null);
  };

  const clearStorage = () => {
    localStorage.removeItem('videos');
    setVideos([]);
  };

  const categorizedVideos = videos.reduce((acc, video) => {
    (acc[video.category] = acc[video.category] || []).push(video);
    return acc;
  }, {});

  return (
    <div className="App">
      <Header openModal={() => setIsAddModalOpen(true)} clearStorage={clearStorage} />
      <Banner />
      {Object.keys(categorizedVideos).map(category => (
        <section key={category}>
          <h2>{category}</h2>
          <VideoList videos={categorizedVideos[category]} deleteVideo={deleteVideo} openEditModal={openEditModal} />
        </section>
      ))}
      {isAddModalOpen && (
        <AddVideoModal 
          addVideo={addVideo} 
          closeModal={() => setIsAddModalOpen(false)} 
        />
      )}
      {isEditModalOpen && currentVideo && (
        <EditVideoModal 
          video={currentVideo} 
          editVideo={editVideo} 
          closeModal={() => setIsEditModalOpen(false)} 
        />
      )}

      <Footer/>

    </div>
  );
};

export default App;

