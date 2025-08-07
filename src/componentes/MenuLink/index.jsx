import { Link, useLocation } from "react-router-dom";
import styles from "./MenuLink.module.css";

export default function MenuLink () {
    const localizacao = useLocation(); 
    
    return (
    <>
    <Link className={`
        ${styles.link}
        ${localizacao.pathname === "/" ? styles.linkDestacado : ""}
        `} to="/">
        Inicio
    </Link>
    
    <Link className={`
        ${styles.link}
        ${localizacao.pathname === "/SobreMim" ? styles.linkDestacado : ""}
        `} to="/SobreMim">
        Sobre Mim
    </Link> 
</>
)
}