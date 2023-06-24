import html from 'assets/svg/skills/html.svg';
import css from 'assets/svg/skills/css.svg';
import javascript from 'assets/svg/skills/javascript.svg';
import typescript from 'assets/svg/skills/typescript.svg';
import nodeJS from 'assets/svg/skills/nodeJS.svg';
import react from 'assets/svg/skills/react.svg';
import bootstrap from 'assets/svg/skills/bootstrap.svg';
import mysql from 'assets/svg/skills/mysql.svg';
import postgresql from 'assets/svg/skills/postgresql.svg';
import git from 'assets/svg/skills/git.svg';
import github from 'assets/svg/skills/github.svg';
import materialui from 'assets/svg/skills/materialui.svg';
import mantine from 'assets/svg/skills/mantine.svg';
import vue from 'assets/svg/skills/vue.svg';
import jest from 'assets/svg/skills/jest.svg';
import canva from 'assets/svg/skills/canva.svg';

export const skillsImage = (skill: string) => {
    const skillID = skill.toLowerCase();
    switch (skillID) {
        case 'html':
            return html;
        case 'css':
            return css;
        case 'javascript':
            return javascript;
        case 'typescript':
            return typescript;
        case 'node js':
            return nodeJS;
        case 'react':
            return react;
        case 'bootstrap':
            return bootstrap;
        case 'mysql':
            return mysql;
        case 'postgresql':
            return postgresql;
        case 'git':
            return git;
        case 'github':
            return github;
        case 'mui':
            return materialui;
        case 'mantine':
            return mantine;
        case 'vue':
            return vue;
        case 'jest':
            return jest;
        case 'canva':
            return canva;
        default:
            break;
    }
};
