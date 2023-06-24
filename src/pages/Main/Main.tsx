import { Helmet } from 'react-helmet';
import { lazy } from 'react';
import { useTranslation } from 'react-i18next';

import {
    Nav,
    Footer,
    Landing,
} from 'components';

const About = lazy(() => import('components/About/About').then((module) => ({ default: module.About })));
const Skills = lazy(() => import('components/Skills/Skills').then((module) => ({ default: module.Skills })));
const Experience = lazy(() => import('components/Experience/Experience').then((module) => ({ default: module.Experience })));
const Education = lazy(() => import('components/Education/Education').then((module) => ({ default: module.Education })));
const Contacts = lazy(() => import('components/Contacts/Contacts').then((module) => ({ default: module.Contacts })));
const Projects = lazy(() => import('components/Projects/Projects').then((module) => ({ default: module.Projects })));

export function Main() {
    const { t } = useTranslation();

    return (
        <>
            <Helmet>
                <title>
                    {t('header.name')}
                    {' '}
                    |
                    {' '}
                    {t('helmet.main')}
                </title>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="use-credentials" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
                    rel="stylesheet"
                />
            </Helmet>

            <Nav />
            <Landing />
            <About />
            <Skills />
            <Experience />
            <Education />
            <Projects />
            <Contacts />
            <Footer />
        </>
    );
}
