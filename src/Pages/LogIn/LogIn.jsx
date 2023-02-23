import React from 'react'
import styles from '../LogIn/LogIn.module.css'
import loginImg from '../LogIn/loginImg.jpg'

const LogIn = () => {
    return (
        <div className={styles.app__login}>
            <div className={styles.app__left}>
                <img src={loginImg} alt="login photo" />
                <p>“Don’t be afraid to share what you know, because you know it better than anyone else!”</p>
            </div>
            <div className={styles.app__right}>
                <h1>Log In</h1>
                <form className={styles.app__right_form}>
                    <div>
                        <label>Email address:</label>
                        <input type="email" />
                    </div>
                    <div>
                        <label>Password:</label>
                        <input type="password" />
                    </div>
                    <input type="submit" value="Log In" />
                </form>
            </div>
        </div>
    )
}

export default LogIn