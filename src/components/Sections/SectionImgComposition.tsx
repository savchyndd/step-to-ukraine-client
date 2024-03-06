import Image from 'next/image';
import styles from '../Sections/Sections.module.scss';

const SectionImgComposition = ({
  img_1,
  img_2,
  img_3,
  description1,
  description2,
  description3,
}: {
  img_1: any;
  img_2: any;
  img_3: any;
  description1: any;
  description2: any;
  description3: any;
}) => {
  return (
    <>
      <div className={styles.section_gallery}>
        <div className={styles.section_line_box}></div>
        <ul className={styles.section_list}>
          <li>
            <div className={styles.section_img_card_1}>
              <Image
                className={styles.section_img_1}
                src={img_1}
                alt={description1}
              />
            </div>
          </li>
          <li>
            <div className={styles.section_img_card_2}>
              <Image
                className={styles.section_img_2}
                src={img_2}
                alt={description2}
              />
            </div>
          </li>
          <li>
            <div className={styles.section_img_card_3}>
              <Image
                className={styles.section_img_3}
                src={img_3}
                alt={description3}
              />
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SectionImgComposition;
