import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { AiOutlineHome } from 'react-icons/ai';
import { useTranslation } from 'react-i18next';
import { ProjectsDataITF } from 'components/Projects/Projects';
import { SingleProject } from 'components';
import {
    Container,
    Header,
    ProjectContainer,
    ProjectGrid,
    ProjectPageMain,
    Search,
} from './ProjectPage.styled';

export function ProjectPage() {
    const { t } = useTranslation();
    const [search, setSearch] = useState('');

    const projectsData = t('projects.data', {
        returnObjects: true,
    }) as ProjectsDataITF[];

    const filteredArticles = projectsData.filter((project) => {
        const content = project.name + project.desc + project.tags;
        return content.toLowerCase().includes(search.toLowerCase());
    });

    return (
        <ProjectPageMain>
            <Helmet>
                <title>
                    {t('header.name')}
                    {' '}
                    |
                    {' '}
                    {t('helmet.projects')}
                </title>
            </Helmet>
            <Header>
                <Link to="/">
                    <AiOutlineHome />
                </Link>
                <h1>{t('projects.title')}</h1>
            </Header>
            <Container>
                <Search>
                    <input
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search project..."
                    />
                </Search>
                <ProjectContainer>
                    <ProjectGrid
                        align="center"
                        justify="center"
                    >
                        {filteredArticles.map((project) => (
                            <SingleProject
                                key={project.id}
                                id={project.id}
                                name={project.name}
                                desc={project.desc}
                                tags={project.tags}
                                code={project.code}
                                demo={project.demo}
                                imageName={project.name.toLowerCase()}
                            />
            ))}
                    </ProjectGrid>
                </ProjectContainer>
            </Container>
        </ProjectPageMain>
    );
}
