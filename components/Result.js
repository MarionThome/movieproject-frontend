import styles from "../styles/Result.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faArrowRight,
  faArrowLeft,
  faCircleNotch
} from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import Modal from "./Modal";
import { FadeIn } from "react-slide-fade-in";


const DEFAULT_TITLE = "Lorem ipsum dolor"
const DEFAULT_RESUME = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem."

export default function Result() {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.value);
  const router = useRouter();
  const [title, setTitle] = useState(DEFAULT_TITLE);
  const [rating, setRating] = useState(4);
  const [resume, setResume] = useState(DEFAULT_RESUME);
  const [imagePath, setImagePath] = useState(
    "https://tube.hk/images/titles_cache/x1000x1375_movienophoto_2014_1000x1375.jpg.pagespeed.ic.LxSGI5Sl2L.webp"
  );
  const [voteCount, setVoteCount] = useState(0);
  const [movieID, setMovieId] = useState(0);
  const [providers, setProviders] = useState(["none"]);
  const [isVisible, setIsVisible] = useState(false);

  const fetchRequest = {
    default: `http://localhost:3000/movies/selection/${movies.platform}/${movies.genreId.join()}/${movies.realeaseDate}/`,
    "random tv-show": "http://localhost:3000/movies//randomtv",
    "random movie": "http://localhost:3000/movies/randommovie",
  };

  const getMovie = () => {
    fetch(fetchRequest[movies.request], {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        if (movies.platform === "tv") {
          console.log(data);
          setTitle(data.result.name);
        } else {
          setTitle(data.result.title);
        }
        setMovieId(data.result.id);
        setRating(Math.round(data.result.vote_average / 2, 0));
        setResume(data.result.overview);
        data.result.poster_path &&
          setImagePath(
            `https://image.tmdb.org/t/p/original/${data.result.poster_path}`
          );
        setVoteCount(data.result.vote_count);
      })
      .then(() => {
        getProvider();
      });
  };

  useEffect(() => {
    if (!movies.platform) {
      startOver();
    } else {
      getMovie();
    }
  }, []);

  let providersImg = [];

  if (providers && providers[0] !== "none") {
    providersImg = providers[0].map((provider) => {
      return (
        <img
          src={`https://image.tmdb.org/t/p/original${provider["logo_path"]}`}
        />
      );
    });
  }

  const getProvider = () => {
    if (movieID) {
      fetch(`http://localhost:3000/movies/id/${movies.platform}/${movieID}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.result) {
            setProviders([data.result]);
          } else {
            setProviders(["none"]);
          }
        });
    }
  };

  const startOver = () => {
    {
      router.push("/feelings");
    }
  };

  let star = [];
  if (rating) {
    for (let i = 1; i <= 5; i++) {
      star.push(
        <FontAwesomeIcon
          icon={faStar}
          style={{ color: rating >= i ? "#ff2742" : "#f8ebe1" }}
        />
      );
    }
  }

  const toggleModal = () => {
    setIsVisible(!isVisible);
  };

  const dataHasLoaded = title === DEFAULT_TITLE && resume === DEFAULT_RESUME

  if (dataHasLoaded) {
    return (
      <FontAwesomeIcon 
        icon={faCircleNotch}
        size="2x" 
        className={styles.loading}
      />
    )
  }

  return (
    <main>
      <FadeIn
      from="left"
      positionOffset={200}
      triggerOffset={200}
      delayInMilliseconds={400}
    >
      {isVisible && (
        <Modal title={title} resume={resume} toggleModal={toggleModal} />
      )}
      <div className={styles.movieContainer}>
        <img src={imagePath} className={styles.poster}></img>
        <div className={styles.movieInfos}>
          <div className={styles.titleContainer}>
            <h1
              className={styles.movieTitle}
              style={{ fontSize: title.length > 20 ? "2rem" : "3rem" }}
            >
              {title}
            </h1>
            <div className={styles.starContainer}>
              {star}
              <p>({voteCount})</p>
            </div>
          </div>
          <p className={styles.movieResume}>
            {resume.length === 0 && "No description available"}
            {resume.length > 330 ? resume.slice(0, 330) + "..." : resume}
          </p>
          <p
            onClick={() => toggleModal()}
            style={{ cursor: "pointer", color: "red" }}
          >
            {resume.length > 330 && "Read More"}
          </p>
        </div>
        <div className={styles.provider}>{providersImg && providersImg}</div>
      </div>
      <div className={styles.arrowContainer}>
        <div className={styles.arrows}>
          <FontAwesomeIcon
            icon={faArrowLeft}
            size="2x"
            style={{ 
              color: "#fff", 
              cursor: "pointer",
              filter: "drop-shadow(0px 0px 10px rgb(0 0 0 / 0.4))"
            }}
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
            style={{ 
              color: "#ff2742", 
              cursor: "pointer",
              filter: "drop-shadow(0px 0px 10px rgb(0 0 0 / 0.4))"
            }}
            align-self="flex-end"
            onClick={() => getMovie()}
          />
        </div>
      </div>
    </FadeIn>
    </main>
  );
}
