import styles from "../styles/Feelings.module.css"
import { questions } from "../questions";
import { useState, useEffect } from "react";
import QuestionTitle from "./QuestionTitle";
import Answer from "./Answer"; 
import ProgressBar from "./ProgressBar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from "next/router";
import { resetAll } from "../reducers/movies";
import { useDispatch } from "react-redux";

export default function feelings() {
  const dispatch = useDispatch()
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState([])
  const [selectedIndex, setSelectedIndex] = useState(-1)
  const router = useRouter()

  const getAnswers = () => {
    const newAnswers = questions[index].answers.map((item, i) => { 
      return <Answer data={item} handleSelect = {handleSelect} key = {i} index = {i} isClicked = {selectedIndex === i} questionNum = {index + 1}/>;
    });
    setAnswers([newAnswers])
  }

  useEffect(() => {
    dispatch(resetAll())
  }, [])
 
  useEffect(() => {
    getAnswers() 
  }, [index]);

  useEffect(() => {
    getAnswers()
  }, [selectedIndex])


  const handlePrev = () => {
    if(index > 0){
      setIndex(index-1)
    }
  }

  const handleSelect = (indexToSelect) => {
    setSelectedIndex(indexToSelect)
  }

  const handleNext = () => {

    if(index > -1 &&  index < 4){
      setIndex(previndex => previndex+1)
      setSelectedIndex(-1)
    } 
    if(index === 4){
      router.push("/result")
    }

  }



  return (
    <main>
       <h1>{questions[index].question}</h1>
      <div className={styles.answerContainer}>
        {answers}
      </div>
      <div className={styles.iconsContainer}>
      <FontAwesomeIcon icon={faArrowLeft} size="2x"  onClick={() => handlePrev()} style = {index === 0 ? {color : "#f8ebe1", cursor : "default"} : {color : "#ff2742", cursor : "pointer" }}/>
      <ProgressBar progression = {(index+1)/5*100}/>
      <FontAwesomeIcon icon={faArrowRight}size="2x" onClick={() => handleNext()} style = {selectedIndex === -1 ? {color : "#f8ebe1", cursor : "default"} : {color : "#ff2742", cursor : "pointer" }}/>
      </div>
    </main>
  );
}
