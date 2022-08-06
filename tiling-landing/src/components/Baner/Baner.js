import React from 'react'
import {BsArrowRight} from 'react-icons/bs'
import styles from './Baner.module.scss'

function Baner() {
  return (
    <div className={styles.banner}>
        <p className={styles.banner__name}>Квартира в ЖК “Варшавський квартал”</p>
        <div className={styles.banner__link}>
            <p className={styles.banner__link__more}>Детальніше</p>
            <BsArrowRight size='1.5rem'/>
        </div>
        

    </div>
  )
}

export default Baner