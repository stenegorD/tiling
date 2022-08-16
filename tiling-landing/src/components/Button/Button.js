import React from 'react'
import styles from './Button.module.scss'

function Button({title}) {
  return (
    <div className={styles.button}>
        <button><span>{title}</span></button>
    </div>
  )
}

export default Button