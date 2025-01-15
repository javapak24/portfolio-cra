import React from 'react';
import MyHeader from './components/MyHeader';
import MyMain from './components/MyMain';
import MyFooter from './components/MyFooter';

import img_1 from './img1new.png';
import img_2 from './img2.png';
import img_3 from './img3.png';
import img_4 from './img4.png';
import img_5 from './img5b.png';
import img_6 from './img6.png';
import img_7 from './img7.png';
import img_8 from './img8.png';
import img_9 from './img9.png';
import img_10 from './img10.png';
import ImageCarousel from './components/ImageCarousel';

export default function Home() {
  let images = [
    img_1,
    img_2,
    img_3,
    img_4,
    img_5,
    img_6,
    img_5,
    img_6,
    img_7,
    img_8,
    img_9,
    img_10,
  ];

  return (
    <div className="App">
      <MyHeader />
      <MyMain style={{ margin: '20px' }} />
      <div>
        <h2 style={{ margin: '20px' }}>My Projects</h2>
        <ImageCarousel
          images={images}
          style={{ border: 'solid', margin: '20px' }}
        />
      </div>
      <MyFooter />
    </div>
  );
}
