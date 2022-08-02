import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/header"
import Nav from "../components/nav";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-canvas">
      <Header />
      <Nav />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
