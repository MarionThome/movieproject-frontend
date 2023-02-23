import Random from "./Random"
import styles from "../styles/NavBar.module.css";
import logo from "../assets/moodies_logo.png";

export default function NavBar(){
    return (
        <div className={styles.nav}>
            <Random request = "movie" platform = "movie"/>
            <img src={logo.src} style={{
                width: "140px", 
                height: "55px", 
                top: "5px",
                cursor: "pointer"
            }} />
            <Random request = "tv-show" platform = "tv"/>
        </div>
    )
}