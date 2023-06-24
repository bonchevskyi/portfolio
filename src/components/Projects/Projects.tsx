import { Link } from 'react-router-dom';
import { HiArrowRight } from 'react-icons/hi';
import { useTranslation } from 'react-i18next';
import { SingleProject } from 'components';
import {
    Body,
    BodyContainer,
    Header,
    ProjectsMain,
    ViewAll,
} from './Projects.styled';

export interface ProjectsDataITF {
    id: number,
    name: string,
    desc: string,
    tags: string[],
    code: string,
    demo: string
}

export function Projects() {
    const { t } = useTranslation();

    const projectsData = t('projects.data', {
        returnObjects: true,
    }) as ProjectsDataITF[];

    return (
        <div>
            {projectsData.length > 0 && (
                <ProjectsMain id="projects">
                    <Header>
                        <h1>{t('projects.title')}</h1>
                    </Header>
                    <Body>
                        <BodyContainer>
                            {projectsData.slice(0, 4).map((project) => (
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
                        </BodyContainer>

                        {projectsData.length > 4 && (
                            <ViewAll>
                                <Link to="/projects">
                                    <button type="button">
                                        {t('projects.viewAll')}
                                        <HiArrowRight />
                                    </button>
                                </Link>
                            </ViewAll>
                        )}
                    </Body>
                </ProjectsMain>
            )}
        </div>
    );
}
