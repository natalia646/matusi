import "./App.css";
import { Route, Routes } from "react-router-dom";

// import Header from "./components/Header";
// import Footer from "./components/Footer";
import Home from "./components/pages/Home";
import Error from "./components/pages/Error";
import Contacts from "./components/pages/Contact";
import TermsUse from "./components/pages/TermsUse";
import Privacy from "./components/pages/Privacy";
import Refusal from "./components/pages/Refusal";

function App() {
  return (
    <main className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<Error />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/terms" element={<TermsUse />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/refusal" element={<Refusal />} />
      </Routes>
    </main>
  );
}

export default App;
