import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Questions from "./components/Questions/Questions";
// import { Route, Routes } from "react-router-dom";
import About from "./components/AboutApp/About";
import Main from "./components/MainPart/Main";
import Details from "./components/AboutApp/Details";
import Reviews from "./components/Reviews/Reviews";

function App() {
  return (
    <div className="App">
      <Header />
      <Main/>
      <About/>
      <Details/>
      <Reviews/>

      <Questions />
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
