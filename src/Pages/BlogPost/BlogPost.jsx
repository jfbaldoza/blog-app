import Navbar from '../../Components/Navbar/Navbar'
import styles from '../BlogPost/BlogPost.module.css'
import sampleImg from '../BlogPost/head.png'

const BlogPost = () => {
    return (
        <div className={styles.app_blogpost}>
            <Navbar/>
            <div className={styles.app_blogpost_container}>
                <img src={sampleImg} alt="Blog Photo" />
                <h1>What happened to the flights of 2023</h1>
                <div className={styles.app_blogpost_details}>
                    <p>Author: Jan Francis Baldoza</p>
                    <p>February 22, 2023</p>
                </div>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            </div>

        </div>
    )
}

export default BlogPost