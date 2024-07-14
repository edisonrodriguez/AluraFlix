import React from 'react';

const ClearStorageButton = ({ clearStorage }) => {
  return (
    <button onClick={clearStorage}>Clear All Videos</button>
  );
};

export default ClearStorageButton;
