import { useState } from "react"

export default function  Question(props){
    const [isClicked, setClicked] = useState(false) 

    const handleClick = () => {
        setClicked(!isClicked)
        props.handleSelect()
    }

    return(
        <div>
            <p style={{color : isClicked ? "red" : "black"}} onClick={() => handleClick()}>{props.data.answer}</p>
        </div>
    )
}