import React from 'react';
import Button from '../Button/Button';
import users from '../../app/assets/feeback_users.webp';
// import ukr from '../../assets/mountains.webp'
import styles from './AboutProject.module.scss';
import AboutPhoto from './AboutPhoto';
import Image from 'next/image';

const AboutProject = () => {
  // const listItems = [
  //   'Незалежність проголошено 24 серпня 1991 року',
  //   'Офіційна мова - українська. Алфавіт - кирилиця.',
  //   'Київ - столиця України.',
  //   'Україна є найбільшою країною в Європі за площею.',
  //   'Має різноманітну культурну спадщину.',
  // ]

  return (
    <div className={styles.container}>
      <div className={styles.column}>
        <div className={styles.about}>
          {/* <div className={styles.about_title}>Україна</div>
          <div className={styles.aboutList}>
            {listItems.map((text, index) => (
              <div key={index} className={styles.aboutListItem}>
                <span className={styles.about_number}>{index + 1}</span>
                <span className={styles.aboutTextItem}> {text}</span>
              </div>
            ))}
          </div> */}
          <div className={styles.about_title}>Про проєкт</div>
          <div className={styles.aboutList}>
            <p>
              Ціль нашого проекту - пропонувати унікальний спосіб ознайомитися з
              Україною, її різними регіонами, традиціями, культурою та
              пам’ятками.
            </p>
            <p>
              Наша платформа створена для того, щоб надати користувачам
              можливість не лише дізнатися більше про культурну спадщину, але і
              легко бронювати заклади та планувати захоплюючі подорожі цією
              чарівною країною.
            </p>
            <p>
              Головною метою нашого проекту є сприяння розвитку туризму в
              Україні, незалежно від того, чи є ви українцем, чи іноземцем.
            </p>
          </div>
        </div>
        <div className={styles.buttonContainer}>
          <Button
            label="Подорож"
            // onClick={() => console.log('клік')}
            additionalClassName={styles.button_default}
          />
        </div>
        <Image src={users} alt="feebacks" className={styles.about_users} />
      </div>
      <div className={styles.box}>
        <div className={styles.about}>
          {/* <img src={ukr} alt="stop war" className={styles.about_img} />
					<p className={styles.about_bold}>
						Починаючи{" "}
						<span className={styles.about_yellow}>з 24.02.22 року </span>
						Україна та її народ боряться за незалежність та світле майбутнє
						країни та нації в цілому.
					</p>
					<p className={styles.about_info}>
						Ми намагаємося надавати актуальну інформацію по пам’яткам та
						визначним місцям, враховуючи ситуацію в країні в цілому.
					</p> */}
        </div>
      </div>
      <AboutPhoto />
    </div>
  );
};

export default AboutProject;
