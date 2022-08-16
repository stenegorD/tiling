import React, { Component } from 'react'
import Client1 from '../../assets/reviewsSection/Client-1.png'
import { ReactComponent as Quote } from '../../assets/comma.svg'
import { IoIosArrowDropleft, IoIosArrowDropright } from 'react-icons/io'
import styles from './ReviewsSection.module.scss'

function ReviewsSection() {
  return (
    <div className={styles.reviewsSection}>
    <div className='container containerLine-white'>
        <div className={styles.reviewsSection__bg__title}>
            <h3 className={styles.reviewsSection__title}>Відгуки</h3>
        </div>
        <div className={styles.reviewsSection__commentBlock}>
            <div>
                <div className={styles.commentBlock__clientInfo}>
                    <p className={styles.clientInfo__name}>Євген Загородній</p>
                    <p className={styles.clientInfo__position}>Актор і телеведучий</p>
                </div>
                <div className={styles.commentBlock__comment}>
                    <div className={styles.commentBlock__comment__quotes}>
                        <Quote/>
                        <Quote/>
                    </div>
                    <p>Без професіоналів важко щось зробити дійсно класне... Ми прийняли рішення обрати саме вас, оскільки ми керувались правилом, що для нас важливий стиль... Однозначно, я зараз розумію, що без таких професіоналів як Ви було б дуже важко. Ми вам дуже вдячні, гарна робота!</p>
                </div>
            </div>
            <div className={styles.commentBlock__clientPhoto}>
                <img src={Client1} alt='client_photo'></img>
                <div className={styles.commentBlock__clientPhoto__arrowDrop}>
                <IoIosArrowDropleft size={'3rem'}/>
                <IoIosArrowDropright size={'3rem'}/>
                </div>
            </div>
            

        </div>
    </div>
    </div>
  )
}

export default ReviewsSection