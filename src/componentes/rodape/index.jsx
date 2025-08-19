import styles from "./Rodape.module.css"

export default function Rodape () {
    return (
        <footer className={styles.rodape}>
            <h4 className={styles.pp}>Pedro Ferreira™</h4>
        </footer>
    )
}

//import { ReactComponent as MarcaRegistrada } from "assets/MarcaRegistrada.svg" transformou o .svg em um componente <MarcaRegistrada/>