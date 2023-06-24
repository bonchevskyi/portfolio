import { useMantineTheme } from '@mantine/core';
import { useTranslation } from 'react-i18next';
import {
    AboutMain,
    Body,
    Description,
    Line,
    LineCircle,
    LineLine,
    Image,
} from './About.styled';

export function About() {
    const { t } = useTranslation();
    const theme = useMantineTheme();

    return (
        <AboutMain id="about">
            <Line>
                <LineCircle />
                <LineCircle />
                <LineLine />
            </Line>
            <Body>
                <Description>
                    <h2>{t('about.title')}</h2>
                    <p>
                        {t('about.description1')}
                        <br />
                        <br />
                        {t('about.description2')}
                    </p>
                </Description>
                <Image>
                    <img loading="lazy" src={theme.other.aboutimg1} alt="" />
                </Image>
            </Body>
        </AboutMain>
    );
}
