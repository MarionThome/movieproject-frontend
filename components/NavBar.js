import Random from "./Random"
import styles from "../styles/NavBar.module.css";

export default function NavBar(){
    return (
        <div className={styles.nav}>
            <Random request = "movie" platform = "movie"/>
            <Random request = "tv-show" platform = "tv"/>
        </div>
    )
}