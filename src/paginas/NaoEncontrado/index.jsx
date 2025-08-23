import styles from "./NaoEncontrado.module.css"
import erro404 from "assets/404dog.png"
import BotaoPrincipal from "componentes/BotaoPrincipal"
import { useNavigate } from "react-router-dom"

export default function NaoEncontrado() {
    const navegar = useNavigate()

    return (
        <>
            <div className={styles.conteudoContainer}>
                <span className={styles.texto404}>404</span>
                <h1 className={styles.titulo}>
                    Ops! Pagina não encontrada.
                </h1>

                <p className={styles.paragrafo}>
                    Tem certeza de que era isso que você estava procurando?
                </p>

                <p className={styles.paragrafo}>
                    Aguarde uns instantes e recarregue a página, ou volte para a página inicial.
                </p>

                <div className={styles.containerVoltar}>
                    <div className={styles.botaoVoltar}
                        onClick={() => navegar(-1)} //funcao do Hook useNavigate, se for colocado navegar(-1) a pagina anterior será retornada após o clique
                    >
                        <BotaoPrincipal tamanho="lg">
                            Voltar
                        </BotaoPrincipal>
                    </div>

                    <img
                        src={erro404}
                        alt="Cachorro de óculos"
                    />
                    <div className={styles.espacoEmBranco}></div>
                </div>
            </div>
        </>
    )
}

//estilizacao tamanho="lg" aplicada no componente <BotaoPrincipal/>