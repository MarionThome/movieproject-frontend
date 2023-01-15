import styles from '../styles/Home.module.css';


function Home() {
  return (
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Moodies
        </h1>
        <div>
        <h2>  Let's find you something to watch tonight</h2>
        <button className={styles.button}> Start </button>
        </div>
      </main>

  );
}

export default Home;
