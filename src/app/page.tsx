import Hero from '@/components/Hero/Hero';
import styles from './HomePage.module.scss';
import AboutProject from '@/components/AboutProject/AboutProject';
import Sections from '@/components/Sections/Sections';
import FaqSection from '@/components/FAQ/FAQ';

const HomePage = () => {
  return (
    <main className={styles.main}>
      <Hero />
      <AboutProject />
      <Sections />
      <FaqSection />
      {/* <div className={styles.description}>
        <p>Home page </p>
      </div> */}
    </main>
  );
};

export default HomePage;
