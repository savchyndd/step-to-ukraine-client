import Button from "../Button/Button";
import styles from "./SupportUs.module.scss";

const SupportUs = () => {
	return (
		<section className={styles.section}>
			<div className={styles.section_hero}></div>
			<h2 className={styles.section_title_h2}>Підтримати проект</h2>
			<p className={styles.section_text}>
				Будемо вдячні за підтримку нашого проекту! Задля роботи серверів та
				техпідтримки 24/7.
			</p>
			<div className={styles.section_contenerForButton}>
				<Button
					additionalClassName="button_support"
					label={"Підтримати"}
				></Button>
			</div>
		</section>
	);
};

export default SupportUs;
