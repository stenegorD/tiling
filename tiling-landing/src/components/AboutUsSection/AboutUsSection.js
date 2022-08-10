import React from 'react'
import choiseTiling from '../../assets/aboutSection/Frame 206.png'
import layingTiles from '../../assets/aboutSection/Frame 205.png'
import styles from './AboutUsSection.module.scss'

function AboutUsSection() {
  return (
    <div className='container containerLine-grey'>
        <div className={styles.aboutUsSection__bg__title}>
            <h3 className={styles.aboutUsSection__title}>Про нас</h3>
        </div>
    
    <div className={styles.aboutUsSection}>
        <div className={styles.aboutUsSection__info}>
            <div className={styles.aboutUsSection__image}>
                <img src={choiseTiling} alt='choise_tiling'></img>
            </div>
            <div className={styles.aboutUsSection__philosophy}>
                <h4>Філософія компанії</h4>
                <p>Всім привіт! На зв'язку Сергій Терещенко — засновник бренду STELVIN TILING.</p>
                <p>Основною філософією нашої компанії є створення індивідуальних, естетично приголомшливих рішень для наших клієнтів завдяки блискавичній роботі наших майстрів з використанням унікальних стилів. 
                    Навіть якщо у вас немає готового проекту - ми допоможемо отримати результат, про який ви мріяли.</p>
                <p>Ось уже майже 17 років я займаюся професійним укладанням плитки. Працюю з керамічною, керамогранітною, шестигранною, клінкерною, широкоформатною плиткою до 1800 мм та мозаїкою будь-якої складності. </p>
            </div>
        </div>
            <div className={styles.aboutUsSection__statistics}>
                <div className={styles.aboutUsSection__statistics__info}>
                    <div className={styles.aboutUsSection__statistics__info__block}>
                    <div>
                        <span>16+</span>
                        <p>років на ринку</p>
                    </div>
                    <div>
                        <span>225</span>
                        <p>позитивних відгуків</p>
                    </div>
                    </div>
                    
                    <div className={styles.aboutUsSection__statistics__info__block}>
                    <div>
                        <span>90+</span>
                        <p>завершиних проектів</p>
                    </div>
                    <div>
                        <span>21+</span>
                        <p>партнерів компаній</p>
                    </div>
                    </div>
                    

                </div>

                <div className={styles.aboutUsSection__image}>
                    <img src={layingTiles} alt='laying tiles'></img>
                </div>
            </div>

        

    </div>

    </div>
  )
}

export default AboutUsSection