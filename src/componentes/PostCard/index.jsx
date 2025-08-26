import styles from "./post.module.css";
import { Link } from "react-router-dom";

export default function PostCard({ post }) {
    return (

        <Link to={`/posts/${post.id}`}>
            <div className={styles.post}>
                <img className={styles.capa}
                    src={`/assets/posts/${post.id}/capa.png`}
                    alt="Imagem de capa do post"
                />
                <h4 className={styles.titulo}>{post.titulo}</h4>

                <button className={styles.botaoLer}>Saber Mais</button>
            </div>
        </Link>

    )
}