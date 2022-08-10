import React from 'react'
import Button from '../Button/Button'
import styles from './OurServicesSection.module.scss'

function OurServicesSection() {
  return (
    <div className={styles.ourServicesSection}>
    <div className='container containerLine-white'>
        <div className={styles.ourServicesSection__bg__title}>
            <h3 className={styles.ourServicesSection__title}>Про нас</h3>
        </div>
    
        <div className={styles.ourServicesSection__slider}>

        </div>

        <div className={styles.ourServicesSection__button}>
            <Button title='Переглянути всі'/>
        </div>

    </div>
    </div>
  )
}

export default OurServicesSection