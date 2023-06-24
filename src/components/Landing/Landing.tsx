import { useMantineTheme } from '@mantine/core';
import { useTranslation } from 'react-i18next';
import { headerData, socialsData } from 'data';
import { ReactComponent as Logo } from 'assets/svg/logo.svg';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

import {
    Container,
    ContainerLeft,
    LandingMain,
    ContentLeft,
    ContentRight,
    ContainerRight,
    ButtonContainer,
    Image,
    Social,
    ContactButton,
    ResumeButton,
    LogoSVG,
    LogoWrap,
    Socials,
} from './Landing.styled';

export function Landing() {
    const { t } = useTranslation();
    const theme = useMantineTheme();

    return (
        <LandingMain id="home">
            <Container>
                <ContainerLeft>
                    <ContentLeft>
                        <LogoWrap>
                            <LogoSVG xmlns="http://www.w3.org/2000/svg" stroke={theme.colors.secondary[0]} viewBox="0 0 626 362" fill="none">
                                <Logo />
                            </LogoSVG>
                        </LogoWrap>
                        <Socials>
                            {socialsData.github && (
                                <a href={socialsData.github} target="_blank" rel="noreferrer">
                                    <Social>
                                        <FaGithub
                                            style={{ color: theme.colors.secondary[0] }}
                                            aria-label="GitHub"
                                        />
                                    </Social>
                                </a>
                            )}
                            {socialsData.linkedIn && (
                                <a href={socialsData.linkedIn} target="_blank" rel="noreferrer">
                                    <Social>
                                        <FaLinkedin
                                            style={{ color: theme.colors.secondary[0] }}
                                            aria-label="LinkedIn"
                                        />
                                    </Social>
                                </a>
                            )}
                        </Socials>

                    </ContentLeft>
                </ContainerLeft>
                <Image
                    src={headerData.image}
                    alt="Avatar"
                />

                <ContainerRight>
                    <ContentRight>
                        <h6>{t('header.title')}</h6>
                        <h1>{t('header.name')}</h1>
                        <p>{t('header.desciption')}</p>

                        <ButtonContainer>
                            {headerData.resumePdf && (
                                <a
                                    href={headerData.resumePdf}
                                    download="resume"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <ResumeButton>
                                        {t('header.download')}
                                    </ResumeButton>
                                </a>
                            )}
                            <ContactButton className="contac">
                                {t('header.contact')}
                            </ContactButton>
                        </ButtonContainer>
                    </ContentRight>
                </ContainerRight>
            </Container>
        </LandingMain>
    );
}
