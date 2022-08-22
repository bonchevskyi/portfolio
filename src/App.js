import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { ThemeContext } from "./contexts/ThemeContext";
import { Main, BlogPage, ProjectPage } from "./pages";
import { BackToTop } from "./components";
import ScrollToTop from "./utils/ScrollToTop";

import GlobalStyles from "./GlobalStyles";

function App() {
  const { theme } = useContext(ThemeContext);
  //const { t } = useTranslation();

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

          {/* <Redirect to="/" /> */}
        </Routes>
      </Router>
      <BackToTop />
    </div>
  );
}

export default App;
