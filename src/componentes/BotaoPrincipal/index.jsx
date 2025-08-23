import styles from "./BotaoPrincipal.module.css";

export default function BotaoPrincipal({ children, tamanho }) { //props -> children e tamanho
    return (
        <button className={`
        ${styles.botaoPrincipal}
        ${styles[tamanho]}
        `}>
            {children}
        </button>
    )
}

//variavel de estilizacao aplicada -> tamanho="lg", prop criada