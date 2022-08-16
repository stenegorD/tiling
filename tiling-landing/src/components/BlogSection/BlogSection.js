import React from 'react'
import styles from './BlogSection.module.scss'
import blogImage1 from '../../assets/blogSection/blog-1.png'
import blogImage2 from '../../assets/blogSection/blog-2.png'
import Button from '../Button/Button'

function BlogSection() {
  return (
    <div className='container containerLine-grey'>
        <div className={styles.blogSection__bg__title}>
            <h3 className={styles.blogSection__title}>Блог</h3>  
        </div>
        
        <div className={styles.blogSection}>
            <p className={styles.blogSection__text}>Будьте в курсі останніх новин зі світу плитки. Читайте корисні поради при виборі та способі укладки плитки. 
                Все це та багато  іншого в нашому блозі від Сергія Терещенко та команди <br/><strong>STELVIN TILLING</strong></p>

            <div className={styles.blogSection__content}>
                <img src={blogImage1} alt='blog_photo'></img>
                <img src={blogImage2} alt='blog_photo'></img>
            </div>
        </div>

        <div className={styles.blogSection__button}>
            <Button title='Всі статті'/>
        </div>
    </div>
  )
}

export default BlogSection