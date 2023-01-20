import styles from "../styles/Result.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faArrowRight,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { startTransition, useEffect, useState } from "react";
import { resetAll } from "../reducers/movies";


export default function Result() {
  const dispatch = useDispatch()
  const movies = useSelector((state) => state.movies.value)
  const router = useRouter()
  const [title, setTitle] = useState("The Jocker")
  const [rating, setRating] = useState(4)
  const [resume, setResume] = useState("A mentally troubled stand-up comedian embarks on a downward spiral that leads to the creation of an iconic villain.")
  const [imagePath, setImagePath] = useState("https://fr.web.img4.acsta.net/c_310_420/pictures/19/09/03/12/02/4765874.jpg")
  const [voteCount, setVoteCount] = useState(0)
  const [movieID, setMovieId] = useState(0)
  const [providers, setProviders] = useState(["none"])
  const [providerList, setProviderList] = useState([])
  console.log(movies)

  const getMovie = () =>{
    setProviderList([])
    fetch(`http://localhost:3000/movies/selection/${movies.platform}/${movies.genreId.join()}/${movies.realeaseDate}/`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      }).then(res => res.json()).then((data) => {
        if(movies.platform === "tv"){
          console.log(data)
          setTitle(data.result.name)
        }
        else {
          setTitle(data.result.title)
        }
        setMovieId(data.result.id)
        setRating(Math.round(data.result.vote_average/2, 0))
        setResume(data.result.overview)
        setImagePath(`https://image.tmdb.org/t/p/original/${data.result.poster_path}`)
        setVoteCount(data.result.vote_count)
      })
      .then(() => {
        getProvider()
      })
  }

  useEffect(() =>{
    if(!movies.platform){
      startOver()
    } else {
      getMovie()
    }

  }, [])

  
 let providersImg = []
    
    if(providers && providers[0] !== "none"){
      providersImg = providers[0].map((provider) => {
        return <img src= {`https://image.tmdb.org/t/p/original${provider["logo_path"]}`}  />
      })}

      console.log(providersImg)

const getProvider = () => {
  if(movieID){
    fetch(`http://localhost:3000/movies/id/${movieID}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    }).then((res) => res.json()).then((data) => {
      if(data.result){
        console.log(data)
        setProviders([data.result])
      }
      else{
        setProviders(["none"])
      }
    })
  }
}

  const startOver = () =>  {
    {router.push("/feelings")}
  }


  let star = []
  if(rating){
    for(let i = 1; i<=5; i++){
      star.push( <FontAwesomeIcon icon={faStar} style={{ color: rating >= i ? "#ff2742" : "#f8ebe1" }} />)
    }
  }
  
  return (
    <main>
      <div className={styles.movieContainer}>
        <img
          src={
            imagePath
          }
          className={styles.poster}
        ></img>
        <div className={styles.movieInfos}>
          <div className={styles.titleContainer}>
            <h1 className={styles.movieTitle}>{title}</h1>
            <div className={styles.starContainer}>
              {star}
              {/* <FontAwesomeIcon icon={faStar} style={{ color: "#ff2742" }} />
              <FontAwesomeIcon icon={faStar} style={{ color: "#ff2742" }} />
              <FontAwesomeIcon icon={faStar} style={{ color: "#ff2742" }} />
              <FontAwesomeIcon icon={faStar} style={{ color: "#ff2742" }} />
              <FontAwesomeIcon icon={faStar} style={{ color: "#f8ebe1" }} /> */}
            <p>({voteCount})</p>
            </div>
          </div>
          <p className={styles.movieResume}>
            {resume}
          </p>
          {/* https://image.tmdb.org/t/p/original/t2yyOv40HZeVlLjYsCsPHnWLk4W.jpg */}
        </div>
        <div className={styles.provider}>
              {providersImg && providersImg}
        </div>
      </div>
      <div className={styles.arrowContainer}>
        <div className={styles.arrows}>
          <FontAwesomeIcon
            icon={faArrowLeft}
            size="2x"
            style={{ color: "#f8ebe1", cursor: "pointer" }}
            transform="left-0"
            onClick={() => startOver()}
          />
          <p style={{ margin: "auto" }}>Start Over</p>
        </div>
        <div className={styles.arrows}>
          <p style={{ margin: "auto" }}> Another </p>
          <FontAwesomeIcon
            icon={faArrowRight}
            size="2x"
            style={{ color: "#ff2742", cursor: "pointer" }}
            align-self="flex-end"
            onClick={() => getMovie()}
          />
        </div>
      </div>
    </main>
  );
}
