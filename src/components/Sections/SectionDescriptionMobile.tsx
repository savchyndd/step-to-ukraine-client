import styles from '../Sections/Sections.module.scss';
import Button from '../Button/Button';
import { useState } from 'react';

const SectionDescriptionMobile = ({
  description,
  button,
  svg,
  titleSection,
}: {
  description: any;
  button: any;
  svg: any;
  titleSection: any;
}) => {
  const [onVisible, setOnVisible] = useState(false);
  const { more, toMap } = button;
  const { text1, text2, text3 } = description;
  return (
    <>
      <h2 className={styles.section_descriptions_title_h1}>{titleSection}</h2>
      <div className={styles.section_descriptions_text}>
        {onVisible === true ? <p>{text1}</p> : <p>{`${text1}..`}</p>}
        {onVisible && <br />}
        {onVisible && <p>{text2}</p>}
        {onVisible && <br />}
        {onVisible && <p>{text3}</p>}

        <div className={styles.section_contenerForButton}>
          {!onVisible && (
            <Button
              label={more}
              additionalClassName="button_second"
              styleToSvg={svg?.arrowUp}
              onClick={() => setOnVisible(true)}
            />
          )}
          {onVisible && (
            <Button
              label={titleSection}
              additionalClassName="button_default"
              styleToSvg={svg?.arrowUp}
            />
          )}
          {onVisible && toMap && (
            <Button
              label={toMap}
              additionalClassName="button_second"
              styleToSvg={svg?.arrowDown}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default SectionDescriptionMobile;
