import styles from '../styles/Home.module.css';
import {useRouter} from 'next/router'
import NavBar from './NavBar';

function Home() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/feelings")
  }
  return (
      <main className={styles.main}>
        <NavBar />
        <h1 className={styles.title}>
          Welcome to Moodies
        </h1>
        <div>
        <h2>  Let's find you something to watch tonight</h2>
        <button className={styles.button} onClick = {() => handleClick()}> Start </button>
        </div>
      </main>

  );
}

export default Home;
