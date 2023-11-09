import "./App.css";
import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";

const Error = React.lazy(() => import("./components/pages/Error"));
const TermsUse = React.lazy(() =>
  import("./components/pages/Protocol/TermsUse")
);
const Privacy = React.lazy(() => import("./components/pages/Protocol/Privacy"));
const Refusal = React.lazy(() => import("./components/pages/Protocol/Refusal"));
const Contacts = React.lazy(() => import("./components/pages/Contact/Contact"));

const pages = [
  { path: "/*", component: <Error /> },
  { path: "/contact", component: <Contacts /> },
  { path: "/terms", component: <TermsUse /> },
  { path: "/privacy", component: <Privacy /> },
  { path: "/refusal", component: <Refusal /> },
];

function App() {
  return (
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
  );
}

export default App;
