import styles from '../Posts/Posts.module.css'

export default function Posts({ posts }) {
    return (
        <div className={styles.app__post}>
            {posts.map((p, i)=>(
                <div className={styles.app__post_container} key={i}>
                    <img src={p.photo} alt="blog img" />
                    <h3>{p.title}</h3>
                    <p className={styles.app__posts_date}> {new Date(p.createdAt).toDateString()}</p>
                    <p className={styles.app__posts_details}>{p.desc}</p>
                </div>
            ))}
        </div>
    );
}