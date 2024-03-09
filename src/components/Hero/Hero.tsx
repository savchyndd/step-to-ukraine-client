'use client';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Scrollbar, Navigation, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import styles from './Hero.module.scss';
import searchIcon from '@/app/assets/hero/search.svg';
import Image from 'next/image';

const Hero = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e: any) => {
    setSearchTerm(e.target.value);
    // console.log("searchTerm", searchTerm);
  };

  const items = [
    {
      id: '01',
      text: 'Унікальний контент',
      description:
        'Ексклюзивний вміст для вивчення України, її культури та природних красот',
    },
    {
      id: '02',
      text: 'Зручне планування',
      description:
        'Простий інструментарій для бронювання готелів, ресторанів та екскурсій',
    },
    {
      id: '03',
      text: 'Місцева експертиза',
      description: 'Поради та рекомендації від місцевих експертів та гідів.',
    },
    {
      id: '04',
      text: 'Міжнародна аудиторія',
      description:
        'Привертання як місцевих, так і іноземних відвідувачів для розвитку туризму в Україні.',
    },
  ];

  const slides = items.map((item, index) => (
    <div
      key={index}
      className={`${styles.listItemMob} ${
        index % 2 === 0 ? styles.reverseRow : ''
      }`}
    >
      <p
        className={`${styles.listNumber} ${
          index % 2 === 0 ? styles.mardginLeft : ''
        }`}
      >
        0{index + 1}
      </p>
      <div className={styles.listContainer}>
        <h3 className={styles.listTitle}>{item.text}</h3>
        <p className={styles.listText}>{item.description}</p>
      </div>
    </div>
  ));

  return (
    <>
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.inputDiv}>
            <div className={styles.inputContainer}>
              <input
                className={styles.search}
                type="text"
                placeholder="Я шукаю..."
                value={searchTerm}
                onChange={handleSearchChange}
              />
              <button className={styles.icon}>
                <Image src={searchIcon} alt="Search Icon" />
              </button>
            </div>
          </div>
          <div className={styles.textContainer}>
            <h1 className={styles.title}>Step to Ukraine</h1>
            <h3 className={styles.afterTitle}>
              Unveil the Wonders, Step by Step
            </h3>
          </div>
          <Swiper
            className={styles.swiper}
            slidesPerView={3}
            centeredSlides={false}
            slidesPerGroupSkip={1}
            grabCursor={true}
            keyboard={{
              enabled: true,
            }}
            breakpoints={{
              1440: {
                slidesPerView: 2,
                slidesPerGroup: 1,
              },
              1920: {
                slidesPerView: 3,
                slidesPerGroup: 1,
              },
            }}
            scrollbar={true}
            init={true}
            navigation={false}
            pagination={false}
            modules={[Keyboard, Scrollbar, Navigation, Pagination]}
            autoplay={true}
            // className="mySwiper"
          >
            {items.map(({ id, text, description }) => {
              return (
                <SwiperSlide key={id} style={{ width: '580px' }}>
                  <div className={styles.listItem}>
                    <p className={styles.listNumber}>{id}</p>
                    <div className={styles.listContainer}>
                      <h3 className={styles.listTitle}>{text}</h3>
                      <p className={styles.listText}>{description}</p>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </section>
      <section className={styles.infoMobSection}>{slides}</section>
    </>
  );
};

export default Hero;
