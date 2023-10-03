import "./App.css";
import { Route, Routes } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/pages/Home";
import Error from "./components/pages/Error";
import Contacts from "./components/pages/Contact";
import TermsUse from "./components/pages/TermsUse";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<Error />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/terms" element={<TermsUse />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
