import html from "../assets/svg/skills/html.svg";
import css from "../assets/svg/skills/css.svg";
import javascript from "../assets/svg/skills/javascript.svg";
import nodeJS from "../assets/svg/skills/nodeJS.svg";
import react from "../assets/svg/skills/react.svg";
import bootstrap from "../assets/svg/skills/bootstrap.svg";
import mysql from "../assets/svg/skills/mysql.svg";
import git from "../assets/svg/skills/git.svg";
import github from "../assets/svg/skills/github.svg";
import materialui from "../assets/svg/skills/materialui.svg";

import canva from "../assets/svg/skills/canva.svg";

export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case "html":
      return html;
    case "css":
      return css;
    case "javascript":
      return javascript;
    case "node js":
      return nodeJS;
    case "react":
      return react;
    case "bootstrap":
      return bootstrap;
    case "mysql":
      return mysql;
    case "git":
      return git;
    case "github":
      return github;
    case "materialui":
      return materialui;
    case "canva":
      return canva;
    default:
      break;
  }
};
