'use client';
import { useState } from 'react';
import styles from './FAQ.module.scss';

import imgChurch1 from '../../img/church-1.webp';
import imgChurch2 from '../../img/church-2.webp';
import Image from 'next/image';

const dataFAQ = [
  {
    id: '1',
    question: 'Наскільки ваша інформація є актуальною?',
    answer:
      'Наповнення сайту відбувається поступово. Надалі ми плануємо розширити нашу платформу, додавши розділи “Подорожі” та	“Бронювання”, щоб надати вам ще більше можливостей для	комфортної та захопливої подорожі Україною. Ми працюємо над	цими функціями та очікуємо додаткового оновлення в	найближчому майбутньому. Дякуємо за ваше терпіння та залишайтеся з нами!',
  },
  {
    id: '2',
    question: 'На що йдуть отримані вами донати?',
    answer:
      'Отримані нами кошти йдуть на розвиток даної платфори, та тех підтримку',
  },
  {
    id: '3',
    question: 'Як з вами зв’язатися?',
    answer:
      "Щоб з нами зв'язатися, ви написати нам на пошту template@gmail.com",
  },
  {
    id: '4',
    question: 'Як нам допомогти?',
    answer:
      'Ви можете допомогти нам в кілька способів. Наприклад, написати конструктивний відгук, розповісти про нас друзям або ж підтримати нас фінансово',
  },
  {
    id: '5',
    question: 'Коли з’являться в наявності розділи «Подорожі» та «Бронювання»?',
    answer:
      "Як тільки з'являться розділи «Подорожі» та «Бронювання» ми повідомимо вас листом на електронну пошту, якщо ви підписані. Якщо ж ви не підписані, то просто час від часу перевіряйте головне меню",
  },
];

const FaqSection = () => {
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({
    id: false,
  });

  const handleToggleVisibility = (id: string) => {
    setIsVisible(prev => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className={styles.section}>
      <Image
        className={styles.section_img_church1}
        src={imgChurch1}
        alt="church-1"
      />
      <Image
        className={styles.section_img_church2}
        src={imgChurch2}
        alt="church-2"
      />
      <div className={styles.section_subSection}>
        <h2 className={styles.section_title_h2}>F.A.Q.</h2>
        <ul className={styles.section_List}>
          {dataFAQ.map(({ question, id, answer }) => (
            <li
              className={styles.section_ListItem}
              key={id}
              onClick={() => handleToggleVisibility(id)}
            >
              <div className={styles.section_ListItemFaq}>
                <h3 className={styles.section_title_h3}>{question}</h3>
                <div
                  className={`${styles.section_button} ${
                    isVisible[id] ? styles.expanded : ''
                  }`}
                >
                  {}
                </div>
              </div>
              {isVisible[id] && (
                <p className={styles.section_description}>{answer}</p>
              )}
            </li>
          ))}
        </ul>
        <h4 className={styles.section_title_h4}>
          Часті питання - короткі відповіді
        </h4>
      </div>
    </div>
  );
};

export default FaqSection;
