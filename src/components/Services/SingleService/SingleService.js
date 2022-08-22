import React, { useContext } from "react";
import Fade from "react-reveal/Fade";
import { ThemeContext } from "../../../contexts/ThemeContext";
import { Content, SingleServiceMain, Icon } from "./SingleService.styled";

function SingleService({ id, title, icon }) {
  const { theme } = useContext(ThemeContext);
  return (
    <Fade bottom>
      <SingleServiceMain key={id} style={{ backgroundColor: theme.primary400 }}>
        <Content style={{ color: theme.tertiary }}>
          <Icon>{icon}</Icon>
          <h4 style={{ color: theme.tertiary }}>{title}</h4>
        </Content>
      </SingleServiceMain>
    </Fade>
  );
}

export default SingleService;
