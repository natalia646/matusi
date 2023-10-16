import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import Error from "./components/pages/Error/Error";
import Contacts from "./components/pages/Contact/Contact";
import TermsUse from "./components/pages/Protocol/TermsUse";
import Privacy from "./components/pages/Protocol/Privacy";
import Refusal from "./components/pages/Protocol/Refusal";

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
