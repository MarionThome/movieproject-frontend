import "../styles/globals.css";
import Head from "next/head";
import popcorn from "../assets/ma__s-souffl__-de-cin__ma.jpg";

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Moodies</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div style={{ display: "flex" }}>
        <div
          style={{
            backgroundImage: `url(${popcorn.src})`,
            height: "100vh",
            width: "33%",
            //backgroundPosition : 'bottom',
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundColor: "#a22928",
          }}
        ></div>
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default App;
