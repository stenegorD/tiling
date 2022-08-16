import React from 'react'
import Header from '../Header/Header'
import styles from './MainSection.module.scss'
import {AiFillInstagram, AiFillFacebook} from 'react-icons/ai'
import {FaTelegramPlane, FaViber} from 'react-icons/fa'
import Button from '../Button/Button'
import Baner from '../Baner/Baner'
import SocialIcons from '../SocialIcons/SocialIcons'

function MainSection() {
  return (
    <div className={styles.mainSection}>
        
        <div className='container'>
        <Header/>
            <div className={styles.mainInfo}>
                <div className={styles.specialization}>
                    <h2>Професійне укладання плитки</h2>
                    <p>з 2005 року</p>
                </div>
                <div className={styles.scrollThroughPreloader}>

                </div>
                
            </div>
            <div className={styles.orderProject}>
                <Button title='Замовити проект'/>
            </div>
            <div className={styles.moreInfoBlock}>
                <SocialIcons socialTypeWhite/>
                <div className={styles.moreInfoBlock__projectDetails}>
                    <Baner/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MainSection