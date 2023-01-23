import styles from "../styles/Modal.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

export default function Modal(props) {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalWrapper}>
        <div className={styles.iconContainer}>
        <FontAwesomeIcon
          icon={faCircleXmark}
          style={{ color: "#ff2742", cursor: "pointer"}}
          onClick = {() => props.toggleModal()}
        />
        </div>
        <h1>{props.title}</h1>
        <div className={styles.textContainer}>
        <p>{props.resume}</p>
        </div>
      </div>
    </div>
  );
}
