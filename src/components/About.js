import React from 'react';
import ImageCards from './ImageCards';

const About = () => {
  const aboutImages = [
    { src: 'https://meek-cupcake-5db711.netlify.app/images/petra.jfif', title: 'Petra, Jordan', description: 'located in a remote valley'},
    { src: 'https://meek-cupcake-5db711.netlify.app/images/statue-Christ.jfif', title: 'Christ the Redeemer',description: 'located in Rio de Janeiro'},
    { src: 'https://meek-cupcake-5db711.netlify.app/images/Machu-Picchu.jfif', title: 'Machu Picchu',description: 'located in Cuzco, Peru' }
  ];

  return (
    <div>
     
      {/* Cards with buttons */}
      <ImageCards images={aboutImages} />
    </div>
  );
};

export default About;
