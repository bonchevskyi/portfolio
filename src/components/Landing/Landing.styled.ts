/* eslint-disable @typescript-eslint/naming-convention */
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import {
    Button, ButtonProps, createPolymorphicComponent,
} from '@mantine/core';
import { MainSection } from 'GlobalStyles';

export const LandingMain = styled(MainSection)`
  @media only screen and (min-width: 320px) and (device-width <= 480px) and (-webkit-device-pixel-ratio: 2) and (device-aspect-ratio <= 2/3) {
    height: 100%;
  }
`;

const _ResumeButton = styled(Button)`
  color: ${({ theme }) => theme.colors.primary[0]};
  background-color: ${({ theme }) => theme.colors.secondary[0]};
  border-radius: 30px;
  text-transform: inherit;
  text-decoration: none;
  width: 160px;
  font-size: 1rem;
  font-weight: 500;
  height: 50px;
  font-family: var(--primaryFont);
  border: 3px solid ${({ theme }) => theme.colors.primary[0]};
  transition: all 250ms ease-in-out;

  @media (hover: hover) or (hover: none) {
    &:hover, &:active {
    && {
      background-color: ${({ theme }) => theme.colors.tertiary[0]};
      color: ${({ theme }) => theme.colors.secondary[0]};
      border: 3px solid ${({ theme }) => theme.colors.tertiary[0]};

    }
  }
  }


  @media screen and (width <= ${({ theme }) => theme.breakpoints.sm}) {
      width: 180px;
  }
`;

export const ResumeButton = createPolymorphicComponent<'button', ButtonProps>(_ResumeButton);

const _ContactButton = styled(Button)`
  color: ${({ theme }) => theme.colors.secondary[0]};
  background-color: ${({ theme }) => theme.colors.primary[0]};
  border-radius: 30px;
  text-transform: inherit;
  text-decoration: none;
  width: 160px;
  font-size: 1rem;
  font-weight: 500;
  height: 50px;
  font-family: var(--primaryFont);
  border: 3px solid ${({ theme }) => theme.colors.primary[0]};
  transition: all 250ms ease-in-out;

  @media (hover: hover) or (hover: none) {
    &:hover, &:active {
    && {
      background-color: ${({ theme }) => theme.colors.secondary[0]};
      color: ${({ theme }) => theme.colors.tertiary[0]};
      border: 3px solid ${({ theme }) => theme.colors.tertiary[0]};
    }
  }
   }


  @media screen and (width <= ${({ theme }) => theme.breakpoints.sm}) {
      display: none;
  }
`;

export const ContactButton = createPolymorphicComponent<'button', ButtonProps>(_ContactButton);

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  position: relative;

  @media (width <= 600px) {
    flex-direction: column;
    justify-content: space-between;
  }
`;

export const ButtonContainer = styled.div`
  margin-top: 2rem;
  width: 350px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: "var(--primaryFont)", sans-serif;

  @media (width <= 1100px) {
    margin-top: 1rem;
    flex-direction: column;
    width: 200px;
    height: 120px;
    align-items: flex-start;
  }

  @media (width <= 900px) {
    margin-top: 1rem;
    flex-direction: column;
    width: 200px;
    height: 120px;
    align-items: flex-start;

    button:nth-of-type(2) {
      display: none;
    }
  }

  @media (width <= 600px) {
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;

    button {
      margin-top: -20%;
    }
  }

  a {
    text-decoration: none;
  }
`;

export const LogoWrap = styled.div`
  display: flex;
  padding-left: 24px;
  width: 100%;
  align-items: center;
`;

const fillSvg = keyframes`
  from {
    stroke-dashoffset: 2202;
  }
  to {
    stroke-dashoffset: 0;
  }
`;

export const LogoSVG = styled.svg`
  height: 5rem;
  width: 5rem;
  stroke-dasharray: 2202;
  animation: 3s ${fillSvg} linear;

  @media (width <= 900px) {
    height: 3.5rem;
    width: 3.5rem;
  }
`;

export const ContainerLeft = styled.div`
  flex: 35%;
  height: 100%;
  height: 100vh;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  background-color: ${({ theme }) => theme.colors.primary[0]};  

  @media (width <= 600px) {
    flex: initial;
    width: 100%;
    height: 30%;
  }
`;

export const ContainerRight = styled.div`
  flex: 65%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  background-color: transparent; 

  @media (width <= 600px) {
    box-sizing: border-box;
    height: 70%;
    width: 100%;
    padding: 0 2rem;
    flex: initial;
    align-items: center;
    justify-content: center;
  }
`;

export const ContentLeft = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const ContentRight = styled.div`
  width: 65%;
  margin: 0 auto;
  padding-left: 100px;
  font-family: var(--primaryFont);
  font-style: normal;
  color: ${({ theme }) => theme.colors.tertiary[0]}; 

  @media (width <= 900px) {
    width: 60%;
    margin-top: 10%;
    margin-right: 6%;
    padding-left: 20px;
  }

  @media (width <= 600px) {
    margin-top: 180px;
    margin-right: initial;
    width: 100%;    
    padding: 0;
  }

  @media (width <= 500px) {    
    margin-top: 150px;
  }

  @media (width <= 370px) {
    margin-top: 150px;
  }

  p {
    margin-top: 1.45rem;
    font-weight: 500;
    font-size: 1.15rem;
    opacity: 0.7;

    @media (width <= 1100px) {
      margin-top: 0.3rem;
      margin-bottom: 1rem;
      font-weight: 500;
      font-size: 1rem;
    }

    @media (width <= 600px) {
      font-size: 0.95rem;
      text-align: center;
      margin: 0 auto;
      width: 90%;
    }
  }

  h1 {
    font-weight: 600;
    font-size: 3.25rem;
    line-height: 110%;
    margin: 1rem 0;

    @media (width <= 1100px) {
      font-size: 3rem;
    }

    @media (width <= 600px) {
      font-size: 2.5rem;
      text-align: center;
    }
  }

  h6 {
    font-weight: 500;
    font-size: 1.25rem;
    margin-bottom: -0.85rem;
    opacity: 0.8;

    @media (width <= 1100px) {
      font-size: 1.1rem;
    }

    @media (width <= 600px) {
      font-size: 1rem;
      text-align: center;
      margin-top: 20px;
    }

    @media (width <= 370px) {
      margin: 0;
    }
  }
`;

export const Socials = styled.div`
  margin: 2rem;
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: center;

  @media (width <= 1100px) {
    margin: 1.5rem;
  }
`;

export const Social = styled.div`
  font-size: 35px;
  transition: transform 0.5s;
  margin: 0 1rem;

  @media (hover: hover) or (hover: none) {
    &:hover, &:active {
    transform: scale(1.2);
  }
  }


  @media (width <= 900px) {
    font-size: 30px;
  }

  @media (width <= 600px) {
    display: none;
  }
`;

export const Image = styled.img`
  --img-size: 400px;
  position: absolute;
  left: 35%;
  transform: translateX(-50%);
  width: var(--img-size);
  height: var(--img-size);
  object-fit: cover;
  border-radius: 50%;
  box-shadow: 0 0 30px rgb(0 0 0 / 20%);
  transition: opacity 0.3s;
  border-color: ${({ theme }) => theme.colors.primary[0]};

  @media (width <= 1100px) {
    --img-size: 350px;
  }

  @media (width <= 900px) {
    --img-size: 300px;
  }

  @media (width <= 600px) {
    --img-size: 170px;
    left: 50%;
    top: 30%;
    border: 8px solid #eaeaea;
    transform: translate(-50%, -50%);
  }

  @media only screen and (width <= 320px) {
    --img-size: 150px;
    left: 50%;
    top: 25%;
  }
`;
