import styles from "./Banner.module.css";

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h3 className={styles.titulo}>
                   Hello there, I'm <strong>Pedro Ferreira</strong>, a Software Developer, based in Brazil
                </h3>
                <p className={styles.paragrafo}>
                     ipsum dolor sit amet, consectetur adipiscing elit. Nullam lacus lacus, maximus molestie mollis vitae, finiLorembus sit amet tellus. Cras tincidunt mattis eros vel facilisis. Aliquam consequat nibh et nulla ultrices facilisis. Ut pellentesque lectus luctus, accumsan enim nec, tristique est. Quisque bibendum ante metus, ut dictum massa consequat non. Nam elementum efficitur augue et dignissim. Nullam non ligula diam. Proin lacinia metus quis faucibus dictum. Mauris quis neque at sapien tincidunt tempor vel ut nibh. Duis interdum tincidunt justo, id aliquet lorem congue sit amet. Vivamus porttitor sem id maximus aliquet. Aliquam erat volutpat.
                </p>
            </div>
        </div>
    )
}

/*

import minhaFoto from "assets/minhaFoto.jpeg"
import styles from "./Banner.module.css";

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h3 className={styles.titulo}>
                   Hello there, I'm <strong>Pedro Ferreira</strong>, a Software Developer, based in Brazil
                </h3>
                <p className={styles.paragrafo}>
                     ipsum dolor sit amet, consectetur adipiscing elit. Nullam lacus lacus, maximus molestie mollis vitae, finiLorembus sit amet tellus. Cras tincidunt mattis eros vel facilisis. Aliquam consequat nibh et nulla ultrices facilisis. Ut pellentesque lectus luctus, accumsan enim nec, tristique est. Quisque bibendum ante metus, ut dictum massa consequat non. Nam elementum efficitur augue et dignissim. Nullam non ligula diam. Proin lacinia metus quis faucibus dictum. Mauris quis neque at sapien tincidunt tempor vel ut nibh. Duis interdum tincidunt justo, id aliquet lorem congue sit amet. Vivamus porttitor sem id maximus aliquet. Aliquam erat volutpat.
                </p>
            </div>
            <div className={styles.imagens}>
                <img
                    className={styles.minhaFoto}
                    src={minhaFoto}
                    alt="Foto de Pedro"
                />
            </div>
        </div>
    )
}
    */