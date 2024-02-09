import Image from 'next/image';

import logo from '@/img/svg/logo-UA.svg';

import styles from './Header.module.scss';
import Link from 'next/link';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header_nav}>
        <Image className={styles.logo} src={logo} alt="logo" />
        <nav className={styles.nav} aria-label="main navigation">
          <ul className={styles.nav_big}>
            <li className={styles.nav_big_item + ' ' + styles.nav_item__activ}>
              <Link className={styles.nav_item__link} title="Головна" href="/">
                Головна
              </Link>
            </li>
            <li className={styles.nav_big_item}>
              <Link
                className={styles.nav_item__link}
                title="Регіони"
                href="/region"
              >
                Регіони
              </Link>
            </li>
            <li className={styles.nav_big_item}>
              <Link className={styles.nav_item__link} title="Подорожі" href="#">
                Подорожі
              </Link>
            </li>
            <li className={styles.nav_big_item}>
              <Link
                className={styles.nav_item__link}
                title="Бронювання"
                href="#"
              >
                Бронювання
              </Link>
            </li>
            <li className={styles.nav_big_item}>
              <Link className={styles.nav_item__link} title="Традиції" href="#">
                Традиції
              </Link>
            </li>
            <li className={styles.nav_big_item}>
              <Link className={styles.nav_item__link} title="F.A.Q." href="#">
                F.A.Q.
              </Link>
            </li>
          </ul>
        </nav>
        <nav className={styles.nav_small} aria-label="menu auxiliary">
          <ul className={styles.nav_small_items}>
            <li className={styles.menu_language} aria-label="menu language">
              <span className={styles.language_selection} title="Укр">
                Укр
              </span>
              <span>
                <i className={styles.icon_arrow_up_down}></i>
              </span>
            </li>
            <li className={styles.menu_user}>
              <Link className={styles.menu_user__link} href="#">
                {' '}
                <i className={styles.icon_favorites_big}></i>
              </Link>
              <Link className={styles.menu_user__link} href="#">
                {' '}
                <i className={styles.icon_account}></i>
              </Link>
            </li>
            <li className={styles.nav_mob} aria-label="nav-mob">
              <ul className={styles.nav_mob_items}>
                <li className={styles.mob_search}>
                  <Link className={styles.mob_item__link} href="#">
                    <i className={styles.icon_search}></i>
                  </Link>
                </li>
                <li className={styles.menu_burger}>
                  <Link className={styles.mob_item__link} href="#">
                    <i className={styles.icon_menu_burger}></i>
                  </Link>
                  <ul className={styles.menu_burger_items}>
                    <li
                      className={styles.menu_burger_language}
                      aria-label="menu burger language"
                    >
                      <ul className={styles.burger_language}>
                        <li
                          className={
                            styles.burger_language__active +
                            ' ' +
                            styles.big_text
                          }
                          data-burger-language="UA"
                        >
                          УКР
                        </li>
                        <li>
                          <i
                            className={
                              styles.burger_language__active +
                              ' ' +
                              styles.icon_arrow_up_light
                            }
                          ></i>
                        </li>
                      </ul>
                      <ul className={styles.burger_language_selection}>
                        <li>
                          <Link
                            className={
                              styles.menu_burger__link + ' ' + styles.big_text
                            }
                            href="#"
                          >
                            УКР
                          </Link>
                        </li>
                        <li>
                          <i className={styles.icon_line}></i>
                        </li>
                        <li>
                          <Link
                            className={
                              styles.menu_burger__link + ' ' + styles.big_text
                            }
                            href="#"
                          >
                            ENG
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link className={styles.menu_burger__link} href="/">
                        Головна
                      </Link>
                    </li>
                    <li>
                      <Link className={styles.menu_burger__link} href="/region">
                        Регіони
                      </Link>
                    </li>
                    <li>
                      <Link className={styles.menu_burger__link} href="#">
                        Подорожі
                      </Link>
                    </li>
                    <li>
                      <Link className={styles.menu_burger__link} href="#">
                        Бронювання
                      </Link>
                    </li>
                    <li>
                      <Link className={styles.menu_burger__link} href="#">
                        Традиції
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          styles.menu_burger__link + ' ' + styles.big_text
                        }
                        href="#"
                      >
                        F.A.Q.
                      </Link>
                    </li>
                    <li>
                      <Link className={styles.menu_burger__link} href="#">
                        Мапа
                      </Link>
                    </li>
                    <li>
                      <Link className={styles.menu_burger__link} href="#">
                        Збережені
                      </Link>
                    </li>
                    <li>
                      <Link className={styles.menu_burger__link} href="#">
                        Профіль
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
