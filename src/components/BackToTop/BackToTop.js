import React, { useState, useContext } from "react";
import { IoIosArrowDropupCircle } from "react-icons/io";
import { makeStyles } from "@material-ui/core/styles";
import { ThemeContext } from "../../contexts/ThemeContext";
import { BackToTopMain } from "./BackToTop.styled";
import { Link } from "react-scroll";

function BackToTop() {
  const [visible, setVisible] = useState(false);

  const { theme } = useContext(ThemeContext);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  const useStyles = makeStyles(() => ({
    icon: {
      fontSize: "3rem",
      color: theme.tertiary,
    },
  }));

  const classes = useStyles();

  return (
    <BackToTopMain style={{ display: visible ? "inline" : "none" }}>
      <Link to="home" spy={true} smooth={true} duration={1000}>
        <button aria-label="Back to top">
          <IoIosArrowDropupCircle className={classes.icon} />
        </button>
      </Link>
    </BackToTopMain>
  );
}

export default BackToTop;
