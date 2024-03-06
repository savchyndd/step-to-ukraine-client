import styles from '../Sections/Sections.module.scss';
import Button from '../Button/Button';

const SectionDescriptionDesctop = ({
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
  const { toMap } = button;
  const { text1, text2, text3 } = description;
  return (
    <>
      <h2 className={styles.section_descriptions_title_h1}>{titleSection}</h2>
      <div className={styles.section_descriptions_text}>
        <p>{text1}</p>
        <br />
        <p>{text2}</p>
        <br />
        <p>{text3}</p>

        <div className={styles.section_contenerForButton}>
          <Button
            label={titleSection}
            additionalClassName="button_default"
            styleToSvg={svg?.arrowUp}
          />
          {toMap && (
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

export default SectionDescriptionDesctop;
