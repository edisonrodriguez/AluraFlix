import React, { useState } from 'react';

const AddVideoForm = ({ addVideo }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [thumbnail, setThumbnail] = useState('');
  const [url, setUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addVideo({ title, description, thumbnail, url });
    setTitle('');
    setDescription('');
    setThumbnail('');
    setUrl('');
  };

  return (
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
        placeholder="YouTube Video URL (Embed)" 
        value={url} 
        onChange={(e) => setUrl(e.target.value)} 
      />
      <button type="submit">Add Video</button>
    </form>
  );
};

export default AddVideoForm;
