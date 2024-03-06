'use client';
import styles from './Sections.module.scss';
import SectionImgComposition from './SectionImgComposition';
import SectionDescriptionMobile from './SectionDescriptionMobile';
import SectionDescriptionDesctop from './SectionDescriptionDesctop';

import dataSections from './dataSections.js';
import { useEffect, useState } from 'react';

const Sections = () => {
  // const [onVisible, setOnVisible] = useState(window.innerWidth < 1920);
  // useEffect(() => {
  //   const handleResize = () => {
  //     setOnVisible(window.innerWidth < 1920);
  //   };

  //   window.addEventListener('resize', handleResize);

  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //   };
  // }, []);

  const [onVisible, setOnVisible] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setOnVisible(window.innerWidth < 1920);
    };

    handleResize(); // Оновлюємо значення під час першого відображення компонента

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <>
      {dataSections.map(
        ({
          styleSection,
          number,
          title,
          description,
          gallery,
          imgOnBg,
          btn,
          SVG,
          decorationLinie = {},
        }) => {
          const {
            img_1: { src: src1, alt: alt1 },
            img_2: { src: src2, alt: alt2 },
            img_3: { src: src3, alt: alt3 },
          } = gallery;
          // const { lineOriginal, lineRotate } = decorationLinie;
          const lineOriginal = decorationLinie?.lineOriginal || '';
          const lineRotate = decorationLinie?.lineRotate || '';
          // const { imgSrc, imgAlt } = imgOnBg;
          return (
            <div key={number} className={styles.section}>
              {/* <img
								className={`${styles.section}_img_${number}`}
								src={imgSrc}
								alt={imgAlt}
							/> */}
              <div className={styles.section_decoration}>
                <p className={styles.section_decoration_text}>{number}</p>
                <div className={styles[lineOriginal]}></div>
                <div className={styles[lineRotate]}></div>
              </div>
              <div className={styles[styleSection]}>
                <div className={styles.section_descriptions}>
                  {onVisible && (
                    <SectionDescriptionMobile
                      titleSection={title}
                      description={description}
                      button={btn}
                      svg={SVG}
                    ></SectionDescriptionMobile>
                  )}
                  {!onVisible && (
                    <SectionDescriptionDesctop
                      titleSection={title}
                      description={description}
                      button={btn}
                      svg={SVG}
                    ></SectionDescriptionDesctop>
                  )}
                </div>
                <SectionImgComposition
                  img_1={src1}
                  img_2={src2}
                  img_3={src3}
                  description1={alt1}
                  description2={alt2}
                  description3={alt3}
                ></SectionImgComposition>
              </div>
            </div>
          );
        }
      )}
    </>
  );
};

export default Sections;
