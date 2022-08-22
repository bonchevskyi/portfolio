import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { HiArrowRight } from "react-icons/hi";

import { ThemeContext } from "../../contexts/ThemeContext";
import SingleBlog from "./SingleBlog/SingleBlog";
import { BlogMain, Body, BodyContainer, Header, ViewAll } from "./Blog.styled";

import { useTranslation } from "react-i18next";

function Blog() {
  const { t } = useTranslation();
  const { theme } = useContext(ThemeContext);

  const useStyles = makeStyles(() => ({
    viewAllBtn: {
      color: theme.tertiary,
      backgroundColor: theme.primary,
      textDecoration: "none",
      "&:hover": {
        color: theme.secondary,
        backgroundColor: theme.primary,
      },
    },
    viewArr: {
      color: theme.tertiary,
      backgroundColor: theme.secondary70,
      width: "40px",
      height: "40px",
      padding: "0.5rem",
      fontSize: "1.05rem",
      borderRadius: "50%",
      cursor: "pointer",
      "&:hover": {
        color: theme.tertiary,
        backgroundColor: theme.secondary,
      },
    },
  }));

  const classes = useStyles();

  const blogData = t("blog.data", {
    returnObjects: true,
  });

  return (
    <>
      {blogData.length > 0 && (
        <BlogMain id="blog" style={{ backgroundColor: theme.secondary }}>
          <Header>
            <h1 style={{ color: theme.primary }}>{t("blog.title")}</h1>
          </Header>
          <Body>
            <BodyContainer>
              {blogData
                .slice(0, 3)
                .reverse()
                .map((blog) => (
                  <SingleBlog
                    theme={theme}
                    title={blog.title}
                    desc={blog.description}
                    date={blog.date}
                    image={blog.image}
                    url={blog.url}
                    key={blog.id}
                    id={blog.id}
                  />
                ))}
            </BodyContainer>

            {blogData.length > 3 && (
              <ViewAll>
                <Link to="/blog">
                  <button className={classes.viewAllBtn}>
                    View All
                    <HiArrowRight className={classes.viewArr} />
                  </button>
                </Link>
              </ViewAll>
            )}
          </Body>
        </BlogMain>
      )}
    </>
  );
}

export default Blog;
