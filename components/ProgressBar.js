import styles from "../styles/Progress.module.css";

export default function ProgressBar(props) {
  return (
    <div className={styles.progressContainer}>
      {/* <progress className={styles.progress} id="file" max="100" value="70"> 70% </progress>   */}
      <div className={styles.progressBarContainer}>
        <div className={styles.progressBar} style={{width : `${props.progression}%`}}></div>
      </div>
    </div> 
  );
}
