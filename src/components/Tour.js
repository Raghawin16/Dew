import React from 'react';
import ImageCards from './ImageCards';

const Tour = () => {
  const tourImages = [
    { src: 'https://meek-cupcake-5db711.netlify.app/images/great-wall.jfif', title: 'Great Wall', description: 'Located near Beijing, China'  },
    { src: 'https://meek-cupcake-5db711.netlify.app/images/paris.jfif', title: 'Eiffle Tower', description: 'Located in Paris, France'  },
    { src: 'https://meek-cupcake-5db711.netlify.app/images/island.jfif', title: 'Temple', description: 'Located in China' },
   
  ];

  return (
    <div>
    
      {/* Cards with buttons */}
      <ImageCards images={tourImages} />
    </div>
  );
};

export default Tour;
