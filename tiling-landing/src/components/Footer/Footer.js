import React from 'react'
import Button from '../Button/Button'
import SocialIcons from '../SocialIcons/SocialIcons'
import styles from './Footer.module.scss'

function Footer() {
  return (
    <div className={styles.footer__container}>
        <div className={styles.footer}>
            <div className={styles.footer__contacts}>
                <h2>Зв`язатись з нами</h2>
                <a href="mailto:info@stelvin.tiling.com">info@stelvin.tiling.com</a>
                <p>Будь ласка, заповніть форму нижче і наш менеджер зв'яжеться з вами в найближчий час для уточнення всіх деталей.</p>
                <Button title='Заповнити форму'/>
            </div>
            <div className={styles.footer__nav}>
                <div className={styles.footer__nav__info}>
                    <h4>Інформація</h4>
                    <nav>
                        <ul>
                            <li>
                                <a>Политика конфидициальности</a>
                            </li>
                            <li>
                                <a>Договор публичной оферты</a>
                            </li>
                            <li>
                                <a>Оплата</a>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div className={styles.footer__nav__menu}>
                    <h4>Меню</h4>
                    <nav>
                        <ul>
                            <li>
                                <a>Проекти </a>
                            </li>
                            <li>
                                <a>Послуги</a>
                            </li>
                            <li>
                                <a>Блог</a>
                            </li>
                            <li>
                                <a>Калькулятор</a>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div className={styles.footer__nav__social}>
                    <h4>Приєднуйся</h4>
                    <SocialIcons socialTypeGrey/>
                </div>

            </div>

        </div>

    </div>
  )
}

export default Footer