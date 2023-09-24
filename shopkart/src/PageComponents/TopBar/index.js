import React from 'react'
import styles from './styles.module.css';
import truck from '../../Assets/Truck.png'
import facebook from '../../Assets/facebook.png'
import insta from '../../Assets/insta.jpg'
import twitter from '../../Assets/twitter.png'
import linkdin from '../../Assets/linkdin.png'





function TopBar() {
  return (
    <div className={styles.container}>
        <div className={styles.left_top}>
            <img src={truck} alt='truck'/>
            <p className={styles.free_delivery} style={{cursor:'pointer'}}>Free delivery</p>
            <p className={styles.free_delivery} style={{cursor:'default'}}>|</p>
            <p className={styles.free_delivery} style={{cursor:'pointer'}}>Return Policy</p>
        </div>
        <div  className={styles.social_media}>
            <p className={styles.free_delivery} style={{cursor:'pointer'}}>Login </p>
            <p className={styles.free_delivery} style={{cursor:'pointer'}}>Follow US</p>
            <img src={facebook} alt='facebook'/>
            <img src={linkdin} alt='linkdin'/>
            <img src={twitter} alt='twitter'/>
            <img src={insta} alt='instagram'/>
        </div>
    </div>
  )
}

export default TopBar