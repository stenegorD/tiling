import React from 'react'
import Button from '../Button/Button'
import projectImage1 from '../../assets/projectsSection/project-1.png'
import projectImage2 from '../../assets/projectsSection/project-2.png'
import projectImage3 from '../../assets/projectsSection/project-3.png'
import projectImage4 from '../../assets/projectsSection/project-4.png'
import styles from './ProjectsSection.module.scss'

function ProjectsSection() {
  return (
    <div className='container containerLine-grey'>
        <div className={styles.projectSection__bg__title}>
            <h3 className={styles.projectSection__title}>Наші останні проекти</h3>  
        </div>
        <p className={styles.projectSection__text}>За останні роки ми працювали над більш ніж 100 проектами по всій країні, надаючи нашим Клієнтам креативні рішення в сучасному, стильному, добре продуманому дизайні.</p>
        <div className={styles.projectSection}>
        <div className={styles.projectSection__image}>
<img src={projectImage1} alt='project_image'></img>
<img src={projectImage2} alt='project_image'></img>
<img src={projectImage3} alt='project_image'></img>
<img src={projectImage4} alt='project_image'></img>
        </div>
        <div className={styles.projectSection__button}>
            <Button title='Переглянути всі'/>
        </div>
        </div>
    </div>
  )
}

export default ProjectsSection