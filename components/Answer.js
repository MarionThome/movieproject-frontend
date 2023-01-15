import { useState } from "react"

export default function  Answer(props){
    

    const handleClick = () => {
        props.handleSelect(props.index)
    }

    return(
        <div>
            <p style={{color : props.isClicked ? "red" : "black"}} onClick={() => handleClick()}>{props.data.answer}</p>
        </div>
    )
}