import styles from "./Rodape.module.css"
import { ReactComponent as MarcaRegistrada } from "assets/MarcaRegistrada.svg"

export default function Rodape () {
    return (
        <footer className={styles.rodape}>
            <h4 className={styles.pp}>Pedro Henrique</h4><MarcaRegistrada />
        </footer>
    )
}

//import { ReactComponent as MarcaRegistrada } from "assets/MarcaRegistrada.svg" transformou o .svg em um componente <MarcaRegistrada/>