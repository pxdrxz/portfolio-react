import styles from "./post.module.css";

export default function Post({ post }) {
    return (
        <div className={styles.post}>
            <img className={styles.capa}
                src={`/assets/posts/${post.id}/capa.png`}
                alt="Imagem de capa do post"
            />
            <h4 className={styles.titulo}>{post.titulo}</h4>
            <buttom className={styles.botaoLer}>Ler</buttom> 
        </div>
    )
}