import "./NaoEncontrado.module.css"

export default function NaoEncontrado() {
    return (
        <div className={styles.ConteudoContainer}>
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
        </div>
    )
}