'use client';
import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Scrollbar, Navigation, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import styles from './AboutProject.module.scss';
// import React from 'react';

// const MyComponent = () => {
//   const containerStyle = {
//     width: '826px',
//     height: '556px',
//     borderRadius: '0px 40px 40px 40px',
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'space-between',
//   };

//   const topImageStyle = {
//     width: '826px',
//     height: '556px',
//     borderRadius: '0px 40px 40px 40px',
//   };

//   const bottomContainerStyle = {
//     width: '826px',
//     height: '180px',
//     display: 'flex',
//     justifyContent: 'space-between',
//   };

//   const imageStyle = {
//     width: '260px',
//     height: '180px',
//     borderRadius: '0px 40px 40px 40px',
//   };

//   return (
//     <div style={containerStyle}>
//       <img src="path/to/top-image.png" alt="Top Image" style={topImageStyle} />
//       <div style={bottomContainerStyle}>
//         <img src="path/to/image1.png" alt="Image 1" style={imageStyle} />
//         <img src="path/to/image2.png" alt="Image 2" style={imageStyle} />
//         <img src="path/to/image3.png" alt="Image 3" style={imageStyle} />
//       </div>
//     </div>
//   );
// };

// export default MyComponent;
import React from 'react';
import { useMediaQuery } from '../../app/service/hooks/useMediaQuery';

import mountains_0 from '../../app/assets/mountains_0.webp';
import mountains_1 from '../../app/assets/mountains_1.webp';
import mountains_2 from '../../app/assets/mountains_2.webp';
import mountains_3 from '../../app/assets/mountains_3.webp';

const AboutPhoto = () => {
  const containerStyle = {
    // maxWidth: "826px",
    width: '100wv',
    // height: "824px",
    height: 'auto',
    // gap: '88px',

    // width: '826px',
    // height: '556px',
    // borderRadius: '0px 40px 40px 40px',
    // display: 'flex',
    // flexDirection: 'column',
    // justifyContent: 'space-between',
  };

  // const topImageStyle = {
  // 	width: "100%",
  // 	height: "556px",
  // 	borderRadius: "0px 40px 40px 40px",
  // 	boxShadow: "2px 2px 10px 0px #021F3E80",
  //   marginBottom: "88px",
  // };

  const imageStyle = {
    maxWidth: '260px',
    height: '180px',
    borderRadius: '0px 40px 40px 40px',
    boxShadow: '2px 2px 10px 0px #021F3E80',
  };

  const data = [
    {
      id: 1,
      src: mountains_0,
      alt: 'Top Image',
    },
    {
      id: 2,
      src: mountains_1,
      alt: 'Image 1',
    },
    {
      id: 3,
      src: mountains_2,
      alt: 'Image 2',
    },
    {
      id: 4,
      src: mountains_3,
      alt: 'Image 3',
    },
  ];

  const widthIs = useMediaQuery('(max-width: 1919.9px)');

  const styleForThreePhotos = {
    subContainer: (widthIs: boolean) => ({
      display: widthIs ? 'none' : 'flex',
      justifyContent: 'space-between',
      gap: '23px',
    }),
  };

  const styleForTopPhoto = {
    subContainer: (widthIs: boolean) => ({
      width: '100%',
      height: widthIs ? '66.67wv' : 'auto',
      borderRadius: '0px 40px 40px 40px',
      boxShadow: '2px 2px 10px 0px #021F3E80',
      marginBottom: widthIs ? '0' : '88px',
    }),
  };

  return (
    <div style={containerStyle}>
      {/* <Image
        key={data[0].id}
        src={data[0].src}
        alt={data[0].alt}
        style={styleForTopPhoto.subContainer(widthIs)}
      /> */}
      <div style={styleForThreePhotos.subContainer(widthIs)}>
        <Swiper
          className={styles.swiper}
          slidesPerView={1}
          centeredSlides={false}
          slidesPerGroupSkip={1}
          grabCursor={true}
          keyboard={{
            enabled: true,
          }}
          breakpoints={{
            1440: {
              slidesPerView: 1,
              slidesPerGroup: 1,
            },
            1920: {
              slidesPerView: 1,
              slidesPerGroup: 1,
            },
          }}
          scrollbar={false}
          init={true}
          navigation={false}
          pagination={true}
          modules={[Keyboard, Scrollbar, Navigation, Pagination]}
          autoplay={true}
          // className="mySwiper"
        >
          {data.map(({ id, src, alt }) => {
            return (
              <SwiperSlide key={id} style={{ width: '580px' }}>
                <Image className={styles.imgSlider} src={src} alt={alt} />
              </SwiperSlide>
            );
          })}
        </Swiper>
        {/* {data.slice(1).map(item => (
          <Image
            key={item.id}
            src={item.src}
            alt={item.alt}
            style={imageStyle}
          />
        ))} */}
      </div>
    </div>
  );
};

export default AboutPhoto;
