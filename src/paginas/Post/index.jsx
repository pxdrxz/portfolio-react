import "./Post.css";
import { useNavigate, useParams } from "react-router-dom";
import posts from "json/posts.json";
import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import ReactMarkdown from "react-markdown";

export default function Post() {
    const navegar = useNavigate()
    const parametros = useParams();

    const post = posts.find((post) => {
        return post.id === Number(parametros.id) //O 'parametros' é tipo string, mas o .id se refere a numeros,
        //  entao a conversao para Number foi feita dessa forma -> Number(parametros.id).
    })

    if (!post) {
        return <h1>Post Não Encontrado...</h1> // <- Caso seja procurado um Post com o id desconhecido irá retornar 
    }

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
        </PostModelo>
    )
}