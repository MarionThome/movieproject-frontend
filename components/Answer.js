import styles from "../styles/Answers.module.css"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addPlatformToStore, addUserMoodToStore, addGenreIdToStore, addRealeaseDateToStore} from '../reducers/movies'

export default function  Answer(props){
    const dispatch = useDispatch()
    const movies =  useSelector((state) => state.movies.value)

    const handleClick = () => {
        props.handleSelect(props.index)
        if (props.questionNum === 1){
            dispatch(addPlatformToStore(props.data.keyword))
        }
        if(props.questionNum === 2){
            dispatch(addUserMoodToStore(props.data.answer))
        }
        if ((props.questionNum === 3 || props.questionNum === 4) && props.data.ids){
            

            if(typeof(props.data.ids[movies.platform]) === Object){
                
                props.data.ids[movies.platform].forEach(item => {
                    dispatch(addGenreIdToStore(item))
                });
            }
            else {
                console.log(props.data.ids[movies.platform])
                dispatch(addGenreIdToStore(props.data.ids[movies.platform]))
            }
        }
        if(props.questionNum === 5 && movies.platform === "movie"){
            dispatch(addRealeaseDateToStore(`primary_release_date.gte=${props.data.answer}-01-01&primary_release_date.lte=${props.data.answer + 10}-12-31`))
        }
        if(props.questionNum === 5 && movies.platform === "tv"){
            dispatch(addRealeaseDateToStore(`&first_air_date.gte=${props.data.answer}-01-01&first_air_date.gte=${props.data.answer}-12-31`))
        }
    }

    return(
        <div className={styles.answer} onClick={() => handleClick()} style={{borderColor : props.isClicked ? "#ff2742" : "#f8ebe1"}} >
            <p >{props.data.answer}</p>
        </div>
    )
}