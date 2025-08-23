import styles from "./SobreMim.module.css";
import PostModelo from "componentes/PostModelo";
import FotoCapa from "assets/sobre_mim_capa.png";
import Banner from "componentes/Banner";

export default function SobreMim() {
  return (
    <main>
      <Banner/>
      
      <PostModelo
        fotoCapa={FotoCapa}
        titulo="Sobre mim"
      >
        <h3 className={styles.subtitulo}>
          Olá, eu sou o Pedro!
        </h3>

      </PostModelo>
    </main>

  );
}
