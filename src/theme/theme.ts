import about from 'assets/svg/about.svg';
import education from 'assets/svg/education.svg';
import experience from 'assets/svg/experience.svg';
import contacts from 'assets/svg/contacts.svg';
import { MantineThemeOverride } from '@mantine/core';

export const themeDark: MantineThemeOverride = {
    colorScheme: 'dark',
    primaryColor: 'primary',
    colors: {
        primary: [
            '#48854f',
            '#5a9161',
            '#417847',
            '#2b502f',
            '#244328',
            '#1d3520',
            '#48854f',
            '#48854f',
            '#48854f', // default shade[8]
            '#48854f',
        ],
        secondary: [
            '#05100B',
            '#1e2823',
            '#37403c',
            '#05100B',
            '#05100B',
            '#05100B',
            '#05100B',
            '#05100B',
            '#05100B',
            '#05100B',
        ],
        tertiary: [
            '#eef6ef',
            '#d6ddd7',
            '#bec5bf',
            '#a7aca7',
            '#eef6ef',
            '#eef6ef',
            '#eef6ef',
            '#eef6ef',
            '#eef6ef',
            '#eef6ef',
        ],
    },
    respectReducedMotion: false,
    other: {
        aboutimg1: about,
        aboutimg2: about,
        eduimg: education,
        expimg: experience,
        contactsimg: contacts,
    },
};

export const themeLight: MantineThemeOverride = {
    colorScheme: 'light',
    primaryColor: 'primary',
    colors: {
        primary: [
            '#48854f',
            '#5a9161',
            '#417847',
            '#2b502f',
            '#244328',
            '#1d3520',
            '#48854f',
            '#48854f',
            '#48854f', // default shade[8]
            '#48854f',
        ],
        secondary: [
            '#deeddf',
            '#c8d5c9',
            '#b2beb2',
            '#deeddf',
            '#deeddf',
            '#deeddf',
            '#deeddf',
            '#deeddf',
            '#deeddf',
            '#deeddf',
        ],
        tertiary: [
            '#05100B',
            '#050e0a',
            '#040d09',
            '#040b08',
            '#05100B',
            '#05100B',
            '#05100B',
            '#05100B',
            '#05100B',
            '#05100B',
        ],
    },
    respectReducedMotion: false,
    other: {
        aboutimg1: about,
        aboutimg2: about,
        eduimg: education,
        expimg: experience,
        contactsimg: contacts,
    },
};
