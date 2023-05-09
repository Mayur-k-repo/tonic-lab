import React, { Suspense, useEffect } from "react";
import Home from "./page/Home";
import PageWrapper from "./components/PageWrapper";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AOS from "aos";
import Career from "./page/Career";
import "./App.scss";
import TermsAndConditions from "./page/TermsAndConditions";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <BrowserRouter>
      <PageWrapper fallback={<div />}>
        <Suspense>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/career" element={<Career />} />
            <Route
              path="/terms-and-conditions"
              element={<TermsAndConditions />}
            />
          </Routes>
        </Suspense>
      </PageWrapper>
    </BrowserRouter>
  );
}

export default App;
