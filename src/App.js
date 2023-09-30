import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Questions from "./components/Questions/Questions";
import { Route, Routes } from "react-router-dom";
import About from "./components/AboutApp/About";
import Main from "./components/MainPart/Main";
import Details from "./components/AboutApp/Details";

function App() {
  return (
    <div className="App">
      <Header />
      <Main/>
      <About/>
      <Details/>

      <Questions />
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
