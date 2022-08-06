import React from 'react';
import styles from './Header.module.scss';
import {ReactComponent as Logo} from '../../assets/logo.svg';
import {ReactComponent as ArrowDown} from '../../assets/arrow-down.svg';

function Header() {
  return (
    <div className={styles.header}>
        <div className={styles.header__logo}>
            <Logo />
        </div>

        <div className={styles.header__nav}>
            <nav>
                <ul className={styles.header__nav__list}>
                <li className={styles.header__nav__item}><a className={styles.header__nav__item__link}>Проекти</a></li>
                <li className={styles.header__nav__item}><a className={styles.header__nav__item__link}>Послуги</a></li>
                <li className={styles.header__nav__item}><a className={styles.header__nav__item__link}>Блог</a></li>
                <li className={styles.header__nav__item}><a className={styles.header__nav__item__link}>Калькулятор</a></li>
                </ul>  
            </nav>
        </div>

        <div className={styles.header__lang}>
            <p className={styles.header__lang__text}>UK</p>
            <ArrowDown/>
        </div>
    </div>
  )
}

export default Header;