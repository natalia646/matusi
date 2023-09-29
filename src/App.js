import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Questions from "./components/Questions/Questions";
import { Route, Routes } from "react-router-dom";
import About from "./components/AboutApp/About";
import Head from "./components/Head/Head";

function App() {
  return (
    <div className="App">
      <Header />
      <Head />
      <About/>

      <Questions />
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
