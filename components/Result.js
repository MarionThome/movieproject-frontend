import styles from "../styles/Result.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faArrowRight,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

export default function Result() {
  return (
    <main>
      <div className={styles.movieContainer}>
        <img
          src={
            "https://fr.web.img4.acsta.net/c_310_420/pictures/19/09/03/12/02/4765874.jpg"
          }
          className={styles.poster}
        ></img>
        <div className={styles.movieInfos}>
          <div className={styles.titleContainer}>
            <h1 className={styles.movieTitle}>The Jocker</h1>
            <div className={styles.starContainer}>
              <FontAwesomeIcon icon={faStar} style={{ color: "#ff2742" }} />
              <FontAwesomeIcon icon={faStar} style={{ color: "#ff2742" }} />
              <FontAwesomeIcon icon={faStar} style={{ color: "#ff2742" }} />
              <FontAwesomeIcon icon={faStar} style={{ color: "#ff2742" }} />
              <FontAwesomeIcon icon={faStar} style={{ color: "#f8ebe1" }} />
            </div>
          </div>
          <p className={styles.movieResume}>
          A mentally troubled stand-up comedian embarks on a downward spiral that leads to the creation of an iconic villain.
          </p>
          {/* https://image.tmdb.org/t/p/original/t2yyOv40HZeVlLjYsCsPHnWLk4W.jpg */}
        </div>
        <div className={styles.provider}>
          <img src="https://image.tmdb.org/t/p/original/t2yyOv40HZeVlLjYsCsPHnWLk4W.jpg" />
          <img src="https://image.tmdb.org/t/p/original/t2yyOv40HZeVlLjYsCsPHnWLk4W.jpg" />
          <img src="https://image.tmdb.org/t/p/original/t2yyOv40HZeVlLjYsCsPHnWLk4W.jpg" />
        </div>
      </div>
      <div className={styles.arrowContainer}>
        <div className={styles.arrows}>
          <FontAwesomeIcon
            icon={faArrowLeft}
            size="2x"
            style={{ color: "#f8ebe1", cursor: "pointer" }}
            transform="left-0"
          />
          <p style={{ margin: "auto" }}>Start Over</p>
        </div>
        <div className={styles.arrows}>
          <p style={{ margin: "auto" }}> Another </p>
          <FontAwesomeIcon
            icon={faArrowRight}
            size="2x"
            style={{ color: "#ff2742", cursor: "pointer" }}
            align-self="flex-end"
          />
        </div>
      </div>
    </main>
  );
}