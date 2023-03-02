import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Post from '../../Components/Post/Post'
import styles from '../Home/Home.module.css'
import headImg from '../Home/header.jpg'


const Home = () => {
    return (
        <div className={styles.app__home}>
            <Navbar/>
            <img className={styles.app__home_header} src={headImg} alt="header photo" />
            <div className={styles.app__home_post}>
                <Post/>
                <Post/>
                <Post/>
            </div>
        </div>
    )
}

export default Home