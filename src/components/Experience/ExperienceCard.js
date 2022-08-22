import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fade from "react-reveal/Fade";
import { ThemeContext } from "../../contexts/ThemeContext";
import expImgWhite from "../../assets/svg/experience/expImgWhite.svg";
import expImgBlack from "../../assets/svg/experience/expImgBlack.svg";
import { Card, CardImg, Details } from "./Experience.styled";

function ExperienceCard({ id, company, jobtitle, startYear, endYear }) {
  const { theme } = useContext(ThemeContext);

  const useStyles = makeStyles((t) => ({
    experienceCard: {
      backgroundColor: theme.primary30,
      "&:hover": {
        backgroundColor: theme.primary50,
      },
    },
  }));

  const classes = useStyles();

  return (
    <Fade bottom>
      <Card key={id} className={classes.experienceCard}>
        <CardImg style={{ backgroundColor: theme.primary }}>
          <img
            src={theme.type === "light" ? expImgBlack : expImgWhite}
            alt=""
          />
        </CardImg>
        <Details>
          <h6 style={{ color: theme.primary }}>
            {startYear}-{endYear}
          </h6>
          <h4 style={{ color: theme.tertiary }}>{jobtitle}</h4>
          <h5 style={{ color: theme.tertiary80 }}>{company}</h5>
        </Details>
      </Card>
    </Fade>
  );
}

export default ExperienceCard;
