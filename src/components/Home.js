import React from 'react';
import ImageCards from './ImageCards';

const Home = () => {
  const homeImages = [
    { src: 'https://meek-cupcake-5db711.netlify.app/images/tajmahal.jfif', title: 'Taj Mahal', description: 'Located in Agra, India' },
    { src: 'https://meek-cupcake-5db711.netlify.app/images/boat.jfif', title: 'Varkala', description: 'Located in Kerala, India' },
    { src: 'https://meek-cupcake-5db711.netlify.app/images/paris.jfif', title: 'Eiffel Tower', description: 'Located in Paris, rance'}
  ];

  return (
    <div>
    
      {/* Cards with buttons */}
      <ImageCards images={homeImages} />
    </div>
  );
};

export default Home;
