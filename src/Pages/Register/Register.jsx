import React from 'react'
import styles from '../Register/Register.module.css'
import registerImg from '../Register/registerImg.jpg'

const Register = () => {
    return (
        <div className={styles.app__register}>
            <div className={styles.app__register_left}>
                <img src={registerImg} alt="register photo" />
            </div>
            <div className={styles.app__register_right}>
                <h1>User Registration</h1>
                <form className={styles.app__register_form}>
                    <div>
                        <label>First Name:</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label>Last Name:</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label>Email address:</label>
                        <input type="email" />
                        <p className={styles.app__register_warning}>We'll never share your email</p>
                    </div>
                    <div>
                        <label>Password:</label>
                        <input type="password" />
                    </div>
                    <div>
                        <label>Confirm Password:</label>
                        <input type="password" />
                    </div>
                    <input type="submit" value="Register" />
                </form>
            </div>
        </div>
    )
}

export default Register