import React, { useState } from 'react';

const EditVideoModal = ({ video, editVideo, closeModal }) => {
  const [title, setTitle] = useState(video.title);
  const [description, setDescription] = useState(video.description);
  const [thumbnail, setThumbnail] = useState(video.thumbnail);
  const [url, setUrl] = useState(video.url);
  const [category, setCategory] = useState(video.category);

  const handleSubmit = (e) => {
    e.preventDefault();
    editVideo({ ...video, title, description, thumbnail, url, category });
  };

  const handleClear = () => {
    setTitle('');
    setDescription('');
    setThumbnail('');
    setUrl('');
    setCategory('JavaScript');
  };

  const handleClose = () => {
    handleClear();
    closeModal();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={handleClose}>&times;</span>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder="Title" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
          />
          <input 
            type="text" 
            placeholder="Description" 
            value={description} 
            onChange={(e) => setDescription(e.target.value)} 
          />
          <input 
            type="text" 
            placeholder="Thumbnail URL" 
            value={thumbnail} 
            onChange={(e) => setThumbnail(e.target.value)} 
          />
          <input 
            type="text" 
            placeholder="Video URL" 
            value={url} 
            onChange={(e) => setUrl(e.target.value)} 
          />
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="JavaScript">JavaScript</option>
            <option value="Python">Python</option>
            <option value="C#">C#</option>
            <option value="Java">Java</option>
          </select>
          <div className="modal-buttons">
            <button type="submit">Save Changes</button>
            <button type="button" onClick={handleClear}>Clear</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditVideoModal;
