import styled from "styled-components";
import { device } from "src/devices";

export const ServicesMain = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 3.7rem;

  @media (min-width: 992px) and (max-width: 1380px) {
    padding: 2.7rem;
  }

  @media screen and (max-width: 992px) {
    padding: 1.7rem;
  }

  @media screen and (max-width: 800px) {
    padding: 1rem;
  }

  @media screen and (max-width: 600px) {
    padding: 0.5rem;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  h1 {
    margin-bottom: 20px;
    font-size: 3.5rem;
    font-family: var(--primaryFont);

    @media screen and (max-width: 800px) {
      font-size: 3rem;
      margin-bottom: 30px;
    }

    @media screen and (max-width: 600px) {
      font-size: 2.5rem;
      margin-bottom: 20px;
    }
  }
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 2rem;

  p {
    font-family: var(--primaryFont);
    font-weight: 400;
    font-size: 1.5rem;
    width: 60%;
    text-align: center;
    margin-bottom: 6rem;

    @media (min-width: 992px) and (max-width: 1380px) {
      width: 70%;
    }

    @media screen and (max-width: 992px) {
      font-size: 1.25rem;
      width: 85%;
      text-align: center;
      margin-bottom: 4rem;
    }

    @media screen and (max-width: 800px) {
      font-size: 1.05rem;
      width: 95%;
      text-align: center;
      margin-bottom: 3rem;
    }

    @media screen and (max-width: 600px) {
      width: 80%;
    }
  }
`;

export const BodyContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4.5rem;
  width: 100%;
  flex-wrap: wrap;

  @media screen and (max-width: 992px) {
    gap: 2.5rem;
  }

  @media screen and (max-width: 800px) {
    gap: 2rem;
  }

  @media screen and (max-width: 600px) {
    gap: 1rem;
  }
`;
