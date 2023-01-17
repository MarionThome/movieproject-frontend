import styles from "../styles/Answers.module.css"
import { useState } from "react"

export default function  Answer(props){
    

    const handleClick = () => {
        props.handleSelect(props.index)
    }

    return(
        <div className={styles.answer} onClick={() => handleClick()} style={{borderColor : props.isClicked ? "#ff2742" : "#f8ebe1"}} >
            <p >{props.data.answer}</p>
        </div>
    )
}