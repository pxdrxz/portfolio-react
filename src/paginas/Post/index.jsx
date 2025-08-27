import "./Post.css";
import styles from "./Post.module.css";
import { useNavigate, useParams } from "react-router-dom";
import posts from "json/posts.json";
import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import ReactMarkdown from "react-markdown";
import NaoEncontrado from "paginas/NaoEncontrado";
import PostCard from "componentes/PostCard";

export default function Post() {
    const navegar = useNavigate()
    const parametros = useParams();

    const post = posts.find((post) => {
        return post.id === Number(parametros.id) //O 'parametros' é tipo string, mas o .id se refere a numeros,
        //  entao a conversao para Number foi feita dessa forma -> Number(parametros.id).
    })

    if (!post) {
        return <NaoEncontrado />// <- Caso seja procurado um Post com o id desconhecido irá retornar 
    }

    const postsRecomendados = posts
        .filter((post) => post.id !== Number(parametros.id))
        .sort((a, b) => b.id - a.id)
        .slice(0, 4)

    return (
        <PostModelo
            fotoCapa={fotoCapa} //prop fotoCapa
            titulo={post.titulo} //prop titulo
        >
            <div className="post-markdown-container">
                <ReactMarkdown>
                    {post.texto}
                </ReactMarkdown>
            </div>

            <h2 className={styles.tituloOutrosPosts}>
                Leia mais algumas curiosidades!
            </h2>

            <ul className={styles.postsRecomendados}>
                {postsRecomendados.map((post) => (
                    <li key={post.id}>
                        <PostCard post={post} />
                    </li>
                ))}
            </ul>

        </PostModelo>
    )
}