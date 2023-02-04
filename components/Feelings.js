import styles from "../styles/Feelings.module.css"
import { questions } from "../questions";
import { useState, useEffect } from "react";
import QuestionTitle from "./QuestionTitle";
import NavBar from "./NavBar";
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
      <NavBar />
      <div className={styles.feelingsWrapper}>
        <h1>{questions[index].question}</h1>
        <div className={styles.answerContainer}>
          {answers}
        </div>
        <div className={styles.iconsContainer}>
        <FontAwesomeIcon 
          icon={faArrowLeft} 
          size="2x"  
          onClick={() => handlePrev()} 
          style = {
            index === 0 ? {
              color : "#fff", 
              cursor : "default",
              filter: "drop-shadow(0px 0px 10px rgb(0 0 0 / 0.4))"
              } : 
            {
              color : "#ff2742", 
              cursor : "pointer",
              filter: "drop-shadow(0px 0px 10px rgb(0 0 0 / 0.4))"
            }
          }/>
        <ProgressBar progression = {(index+1)/5*100}/>
        <FontAwesomeIcon 
          icon={faArrowRight}
          size="2x" 
          onClick={() => {selectedIndex > -1 && handleNext()}} 
          style = {
            selectedIndex === -1 ? {
              color : "#fff", 
              cursor : "default",
              filter: "drop-shadow(0px 0px 10px rgb(0 0 0 / 0.4))"
            } : {
              color : "#ff2742", 
              cursor : "pointer",
              filter: "drop-shadow(0px 0px 10px rgb(0 0 0 / 0.4))"
            }
          }/>
        </div>
      </div>
    </main>
  );
}
