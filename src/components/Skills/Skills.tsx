/* eslint-disable react/no-array-index-key */
import { useTranslation } from 'react-i18next';
import { skillsData } from 'data';
import { skillsImage } from 'utils/skillsImage';
import {
    Container,
    Header,
    SkillsMain,
    SkillBox,
    SkillsTech,
    ScrollDiv,
} from './Skills.styled';

export function Skills() {
    const { t } = useTranslation();

    return (
        <SkillsMain id="skills">
            <Header>
                <h2>{t('skills.title')}</h2>
            </Header>

            <Container>
                <ScrollDiv>
                    <SkillsTech>
                        {skillsData.map((skill, id) => (
                            <SkillBox key={id}>
                                <img loading="lazy" src={skillsImage(skill)} alt={skill} />
                                <h3>{skill}</h3>
                            </SkillBox>
                        ))}
                    </SkillsTech>
                </ScrollDiv>
            </Container>
        </SkillsMain>
    );
}
