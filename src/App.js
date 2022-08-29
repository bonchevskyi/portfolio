import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Main, BlogPage, ProjectPage } from "./pages";
import { BackToTop } from "./components";
import ScrollToTop from "./utils/ScrollToTop";

import GlobalStyles from "./GlobalStyles";

function App() {
  return (
    <div className="app">
      <Router>
        <GlobalStyles />
        <ScrollToTop />
        <BackToTop />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/projects" element={<ProjectPage />} />
        </Routes>
      </Router>
      <BackToTop />
    </div>
  );
}

export default App;
