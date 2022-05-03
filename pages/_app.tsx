import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Oswald:wght@500&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@600&display=swap"
          rel="stylesheet"
        />
        <link href="../public/fonts/Arcon-Regular.otf" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Icons&family=Open+Sans:wght@300;400;600;700&family=Roboto:wght@100;300;400;500;700&display=swap"
          rel="stylesheet"
        />
        <script
          src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js"
          defer
        ></script>
        <script src="https://kit.fontawesome.com/a076d05399.js"></script>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
