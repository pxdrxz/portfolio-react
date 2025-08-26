import styles from "./Inicio.module.css";
import posts from "json/posts.json";
import Post from "componentes/PostCard";
import Banner from "componentes/Banner";
import FotoCapa from "assets/sobre_mim_capa.png";
import PostModelo from "componentes/PostModelo";

export default function Inicio() {
    return (
        <main>
            <Banner />

            <PostModelo
                fotoCapa={FotoCapa}
                titulo="Minhas Competências"
            ></PostModelo>

            <ul className={styles.posts}>
                {posts.map((post) => (
                    <li key={post.id}>
                        <Post post={post} />
                    </li>
                ))}
            </ul>
        </main>
    )
}

