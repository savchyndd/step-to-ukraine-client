import Hero from '@/components/Hero/Hero';
import styles from './HomePage.module.scss';
import AboutProject from '@/components/AboutProject/AboutProject';
import Sections from '@/components/Sections/Sections';
import FaqSection from '@/components/FAQ/FAQ';
import SupportUs from '@/components/SupportUs/SupportUs';
import StepBlock from '@/components/GapBlocks/StepBlock';

const HomePage = () => {
  return (
    <main className={styles.main}>
      <Hero />
      {/* <AboutProject />
      <StepBlock />
      <Sections />
      <FaqSection />
      <SupportUs /> */}
    </main>
  );
};

export default HomePage;
