import React from "react";
import Fade from "react-reveal/Fade";
import { Body, Image, SingleBlogMain } from "./SingleBlog.styled";

function SingleBlog({ theme, title, desc, date, image, url, id }) {
  return (
    <Fade bottom>
      <SingleBlogMain
        key={id}
        href={url}
        target="_blank"
        rel="noreferrer"
        style={{ backgroundColor: theme.primary400 }}
      >
        <Image style={{ backgroundColor: theme.secondary }}>
          <img src={image} alt={title} />
        </Image>
        <Body>
          <p style={{ color: theme.tertiary }}>{date}</p>
          <h3 style={{ color: theme.secondary }}>{title}</h3>
          <h6 style={{ color: theme.secondary }}>{desc}</h6>
        </Body>
      </SingleBlogMain>
    </Fade>
  );
}

export default SingleBlog;
