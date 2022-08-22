import React from "react";
import { Helmet } from "react-helmet";

import {
  Navbar,
  Footer,
  Landing,
  About,
  Skills,
  Testimonials,
  Blog,
  Education,
  Experience,
  Contacts,
  Projects,
  Services,
  Achievement,
} from "../../components";
//import { headerData } from "../../data/headerData";

import { useTranslation } from "react-i18next";

function Main() {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>
          {t("header.name")} | {t("helmet.main")}
        </title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      <Navbar />
      <Landing />
      <About />
      <Skills />
      <Education />
      {/* <Experience />  none yet :(*/}
      <Projects />
      {/* <Achievement /> none yet :( */}
      <Services />
      {/* <Testimonials /> */}
      <Blog />
      <Contacts />
      {/* <Footer /> */}
    </>
  );
}

export default Main;
