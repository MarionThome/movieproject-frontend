import styles from "../styles/Feelings.module.css"
import { questions } from "../questions";
import { useState, useEffect } from "react";
import QuestionTitle from "./QuestionTitle";
import Questions from "./Questions";
import ProgressBar from "./ProgressBar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

export default function feelings() {
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState([])
  const [isSelected, setSelected] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState()

  const getAnswers = () => {
    const newAnswers = questions[index].answers.map((item, i) => {
      console.log(isSelected);
      return <Questions data={item} handleSelect = {handleSelect} key = {i} index = {i}/>;
    });
    setAnswers([newAnswers])
  }
 
  useEffect(() => {
    getAnswers() 
  }, [index]);

  useEffect(() => {
    getAnswers()
  }, [isSelected])


  const handlePrev = () => {
    if(index > 0){
      setIndex(index-1)
    }
  }

  const handleSelect = () => {
    console.log("coucou")
    setSelected(!isSelected)
  }

  const handleNext = () => {
    if(isSelected){
      setSelected(false)
      setIndex(previndex => previndex+1)
    }
  }

  console.log(isSelected)

  return (
    <main>
       <QuestionTitle question={questions[index].question} /> 
      <div>
        {answers}
      </div>
      <div className={styles.iconsContainer}>
      <FontAwesomeIcon icon={faArrowLeft} size="2x"  onClick={() => handlePrev()} style = {index === 0 ? {color : "#f8ebe1", cursor : "default"} : {color : "#ff2742", cursor : "pointer" }}/>
      <ProgressBar progression = {(index+1)/5*100}/>
      <FontAwesomeIcon icon={faArrowRight}size="2x" onClick={() => handleNext()} style = {!isSelected ? {color : "#f8ebe1", cursor : "default"} : {color : "#ff2742", cursor : "pointer" }}/>
      </div>
    </main>
  );
}
