import "./App.css";
import { Route, Routes } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/pages/Home";
import Error from "./components/pages/Error";
import Contacts from "./components/pages/Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<Error />} />
        <Route path="/contact" element={<Contacts />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
