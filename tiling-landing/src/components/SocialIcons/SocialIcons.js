import React from 'react'
import {AiFillInstagram, AiFillFacebook} from 'react-icons/ai'
import {FaTelegramPlane, FaViber} from 'react-icons/fa'
import styles from './SocialIcons.module.scss'
import cx from 'classnames'

function SocialIcons({socialTypeWhite, socialTypeGrey }) {

  return (
        <div className={cx(styles.socialIcons, { [styles.socialIcons_white] : socialTypeWhite }, { [styles.socialIcons_grey] : socialTypeGrey })}>
            <AiFillInstagram size={"20px"} />
            <AiFillFacebook size={"20px"}/>
            <FaTelegramPlane size={"20px"}/>
            <FaViber size={"20px"}/>
        </div>
  )
}

export default SocialIcons