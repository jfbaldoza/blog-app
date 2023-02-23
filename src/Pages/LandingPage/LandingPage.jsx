import React from 'react'
import styles from '../LandingPage/LandingPage.module.css'
import landigImg from '../LandingPage/landingimg.jpg'
import {Link} from 'react-router-dom'

const LandingPage = () => {
    return (
        <div className={styles.app__landingpage}>
            <h1>Share your knowledge to the world</h1>
            <img src={landigImg} alt="landing page image" />
            <p className={styles.app__landingpage_p1}>Magnificent things are very simple</p>
            <div className={styles.app__actions}>
                <Link className={styles.app__actions_login} to={"/login"}>Log In</Link>
                <Link className={styles.app__actions_register} to={"/register"}>Register</Link>
            </div>
            <p className={styles.app__landingpage_p2}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard </p>
        </div>
    )
}

export default LandingPage