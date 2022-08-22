import styled from "styled-components";
import { device } from "src/devices";

export const AchievementMain = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 3rem;

  @media screen and (max-width: 992px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    padding: 2rem;
  }

  @media screen and (max-width: 600px) {
    padding: 1rem;
  }
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
  flex: 0.4;
  //width: 90%;

  @media (min-width: 992px) and (max-width: 1380px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-evenly;
    flex: 0.3;
    width: 90%;
  }

  @media screen and (max-width: 992px) {
    width: 100%;
  }

  h1 {
    font-family: var(--primaryFont);
    font-size: 3.5rem;
    margin-bottom: 1.5rem;

    @media (min-width: 992px) and (max-width: 1380px) {
      font-family: var(--primaryFont);
      font-size: 3.1rem;
    }

    @media screen and (max-width: 992px) {
      font-size: 2.5rem;
    }
  }

  h4 {
    font-size: 1.75rem;
    font-family: "Caveat", cursive;
    font-weight: 400;

    @media screen and (max-width: 600px) {
      font-size: 1.5rem;
    }
  }
`;

export const Cards = styled.div`
  display: flex;
  width: 100%;
  flex: 0.6;
  padding: 2rem;
  flex-direction: column;
  justify-content: center;
  margin-left: 2rem;
  //width: 100%;
  //width: auto;

  @media (min-width: 992px) and (max-width: 1380px) {
    padding: 1rem;
    margin-left: 1%;
    width: 100%;
    flex: 0.7;
  }

  @media screen and (max-width: 992px) {
    margin-left: 0px;
    height: fit-content;
  }

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 170px;
  padding: 1.5rem;
  border-radius: 20px;
  margin-bottom: 1.5rem;
  //margin-left: 1.5rem;
  transition: background-color 200ms ease-in-out;
  //width: 100%;
  //width: auto;
  flex: auto;
  //flex: 2 1 auto;

  //position: relative;

  @media (min-width: 992px) and (max-width: 1380px) {
    justify-content: flex-start;
  }
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  //width: auto;
  margin-right: auto;
  //flex: 1;

  @media screen and (max-width: 992px) {
    width: 70%;
  }
`;

export const CardDetails1 = styled.div`
  @media screen and (max-width: 992px) {
    margin-bottom: 20px;
  }

  h2 {
    font-family: var(--primaryFont);
    font-weight: 500;
    font-size: 1.225rem;
    line-height: 110%;
    margin-bottom: 6px;

    @media screen and (max-width: 992px) {
      font-size: 1.15rem;
    }
  }

  p {
    font-size: 1.1rem;
    font-family: Roboto;
    font-weight: 400;
    margin-bottom: 50px;

    @media screen and (max-width: 992px) {
      font-size: 0.95rem;
    }

    @media screen and (max-width: 600px) {
      font-size: 0.95rem;
    }
  }
`;

export const CardDetails2 = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  font-family: var(--primaryFont);
  font-size: 18px;
  bottom: 7px;
  left: 25px;
  margin-top: auto;
  //position: absolute;

  @media screen and (max-width: 992px) {
    width: 85%;
    position: absolute;
    bottom: 7px;
    left: 25px;
  }

  h5 {
    width: 100%;
  }
`;

export const CardField = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;

  svg {
    margin-right: 6px;
    flex-shrink: 0;
  }
`;

export const CardImg = styled.div`
  display: flex;
  //flex: 1;
  //width: 100%;
  margin-left: auto;

  @media (min-width: 992px) and (max-width: 1380px) {
    margin-left: 1rem;
  }

  @media screen and (max-width: 992px) {
    width: 30%;
    display: flex;
    justify-content: center;
  }

  img {
    width: 150px;
    height: 130px;
    border-radius: 10px;

    @media screen and (max-width: 992px) {
      width: 80px;
      height: 70px;
    }

    @media screen and (max-width: 600px) {
      width: 70px;
      height: 60px;
    }
  }
`;
