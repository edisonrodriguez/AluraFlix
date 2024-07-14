/*import React from 'react';

const Header = ({ openModal }) => {
  return (
    <header>
      <h1>AluraFlix</h1>
      <button onClick={openModal}>Add Video</button>
    </header>
  );
};

export default Header;
*/

import React from 'react';

const Header = ({ openModal, clearStorage }) => {
  return (
    <header>
      <h1>AluraFlix</h1>
      <div className="header-buttons">
        <button onClick={openModal}>Add Video</button>
        <button onClick={clearStorage}>Clear All Videos</button>
      </div>
    </header>
  );
};

export default Header;

