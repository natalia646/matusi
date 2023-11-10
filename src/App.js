import "./App.css";
import React, { Suspense, lazy, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Context } from "./context";
const Error = lazy(() => import("./components/pages/Error"));
const TermsUse = lazy(() => import("./components/pages/Protocol/TermsUse"));
const Privacy = lazy(() => import("./components/pages/Protocol/Privacy"));
const Refusal = lazy(() => import("./components/pages/Protocol/Refusal"));
const Contacts = lazy(() => import("./components/pages/Contact/Contact"));

const pages = [
  { path: "/*", component: <Error /> },
  { path: "/contact", component: <Contacts /> },
  { path: "/terms", component: <TermsUse /> },
  { path: "/privacy", component: <Privacy /> },
  { path: "/refusal", component: <Refusal /> },
];

function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [details, setDetails] = useState(0);


  return (
    <Context.Provider value={{activeIndex, setActiveIndex, details, setDetails}}>
      <Header />
      <main className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          {pages.map((item, i) => {
            return (
              <Route
                key={i}
                path={item.path}
                element={
                  <Suspense fallback={<div>Завантаження...</div>}>
                    {item.component}
                  </Suspense>
                }
              />
            );
          })}
        </Routes>
      </main>
      <Footer />
    </Context.Provider>
  );
}

export default App;
