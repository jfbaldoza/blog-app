import styles from '../Post/Post.module.css'

export default function Post( {post} ) {
    return (
        
        <div className={styles.app__posts}>
            <div className={styles.app__post}>
                <img src={post.photo} alt="blog img" />
                <h3>{post.title}</h3>
                <p className={styles.app__posts_date}> {new Date(post.createdAt).toDateString()}</p>
                <p className={styles.app__posts_details}>{post.desc}</p>
            </div>
        </div>
    )
}

