import styles from '../Post/Post.module.css'
import sampleImg from '../Post/sampleImg.png'

const Post = () => {
    return (
        <div className={styles.app__posts}>
            <div className={styles.app__post}>
                <img src={sampleImg} alt="blog img" />
                <h3>The beauty of Shawarma</h3>
                <p className={styles.app__posts_date}>February 22, 2023</p>
                <p className={styles.app__posts_details}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...</p>
            </div>
        </div>
    )
}

export default Post