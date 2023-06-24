import { useMantineTheme } from '@mantine/core';
import { experienceData } from 'data';
import { ExperienceCard } from 'components';
import {
    Body, Description, ExperienceMain, Image,
} from './Experience.styled';

export function Experience() {
    const theme = useMantineTheme();

    return (
        <ExperienceMain id="experience">
            <Body>
                <Image>
                    <img src={theme.other.expimg} alt="" />
                </Image>
                <Description>
                    <h1>Experience</h1>
                    {experienceData.map((exp) => (
                        <ExperienceCard
                            key={exp.id}
                            id={exp.id}
                            jobtitle={exp.jobtitle}
                            company={exp.company}
                            startYear={exp.startYear}
                            endYear={exp.endYear}
                        />
                    ))}
                </Description>
            </Body>
        </ExperienceMain>
    );
}
