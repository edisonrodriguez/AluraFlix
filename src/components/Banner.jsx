import React from 'react';
import bannerImage from '../assets/AluraFlix.webp';

const Banner = () => {
  return (
    <section className="banner">
      <img src={bannerImage} alt="AluraFlix Banner" />
    </section>
  );
};

export default Banner;
