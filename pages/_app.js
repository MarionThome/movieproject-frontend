import "../styles/globals.css";
import Head from "next/head"
import popcorn from "../assets/ma__s-souffl__-de-cin__ma.jpg";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import movies from "../reducers/movies";


const store = configureStore({
  reducer: { movies },
 });

function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Head>
        <title>Moodies</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans&family=Livvic:wght@700&Poppins:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap" rel="stylesheet"/>
      </Head>
      <div style={{ display: "flex" }}>
        <div
          id = "popcorn"
          style={{
            backgroundImage: `url(${popcorn.src})`,
            height: "100vh",
            width: "35%",
            //backgroundPosition : 'bottom',
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundColor: "#a22928",
            boxShadow: "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px"
          }}
        ></div>
        <Component {...pageProps} />
      </div>
    </Provider>
  );
}

export default App;
