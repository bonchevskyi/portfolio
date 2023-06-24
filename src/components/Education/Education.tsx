import { useTranslation } from 'react-i18next';
import { useMantineTheme } from '@mantine/core';
import { EducationCard } from 'components';
import {
    EducationMain, Body, Description, Image,
} from './Education.styled';

interface EducationDataITF {
    id: number,
    institution: string,
    course: string,
    startYear: string,
    endYear: string,
}

export function Education() {
    const { t } = useTranslation();
    const theme = useMantineTheme();

    const educationData = t('education.data', {
        returnObjects: true,
    }) as EducationDataITF[];

    return (
        <EducationMain id="education">
            <Body>
                <Description>
                    <h1>{t('education.title')}</h1>
                    {educationData.map((edu) => (
                        <EducationCard
                            key={edu.id}
                            id={edu.id}
                            institution={edu.institution}
                            course={edu.course}
                            startYear={edu.startYear}
                            endYear={edu.endYear}
                        />
                    ))}
                </Description>
                <Image>
                    <img loading="lazy" src={theme.other.eduimg} alt="" />
                </Image>
            </Body>
        </EducationMain>
    );
}
