import styled from "styled-components";
import { device } from "src/devices";

export const EducationMain = styled.div`
  min-height: 100vh;

  @media screen and (max-width: 992px) {
    min-height: 100%;
  }
`;

export const Body = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Description = styled.div`
  display: flex;
  width: 100%;
  flex: 0.65;
  padding: 2rem;
  flex-direction: column;
  margin-left: 2rem;

  @media screen and (max-width: 992px) {
    flex: 1;
    margin: auto;
  }

  @media screen and (max-width: 800px) {
    padding: 1rem;
  }

  h1 {
    font-size: 3.5rem;
    font-family: var(--primaryFont);
    margin-bottom: 2rem;

    @media screen and (max-width: 992px) {
      font-size: 3.2rem;
    }

    @media screen and (max-width: 800px) {
      font-size: 3rem;
      margin-bottom: 2rem;
      align-self: center;
    }

    @media screen and (max-width: 600px) {
      font-size: 2.5rem;
    }
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  width: auto;
  height: 140px;
  padding: 1.5rem;
  border-radius: 20px;
  margin-bottom: 1.5rem;
  transition: background-color 200ms ease-in-out;

  @media screen and (max-width: 992px) {
    width: 100%;
    padding: 1.5rem;
    margin-bottom: 1.5rem;
  }

  @media screen and (max-width: 800px) {
    padding: 1rem;
    margin-bottom: 1.5rem;
    height: 130px;
  }
`;

export const CardImg = styled.div`
  border-radius: 50%;
  width: 55px;
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  @media screen and (max-width: 800px) {
    border-radius: 50%;
    width: 45px;
    height: 45px;
  }

  img {
    width: 36px;
    pointer-events: none;

    @media screen and (max-width: 800px) {
      width: 30px;
    }
  }
`;

export const Image = styled.div`
  box-sizing: border-box;
  padding: 1rem;
  flex: 0.35;
  margin-top: 1rem;
  pointer-events: none;

  @media screen and (max-width: 992px) {
    display: none;
  }

  img {
    width: 40rem;
  }
`;

export const Details = styled.div`
  margin-left: 0.6rem;

  h4 {
    font-family: var(--primaryFont);
    font-size: 1.225rem;
    font-weight: 600;

    @media screen and (max-width: 800px) {
      font-size: 1.125rem;
      line-height: 126%;
    }
  }

  h5 {
    font-family: var(--primaryFont);
    font-size: 1.15rem;
    font-weight: 600;

    @media screen and (max-width: 800px) {
      font-size: 1.05rem;
      line-height: 126%;
    }
  }

  h6 {
    font-family: var(--primaryFont);
    font-size: 0.85rem;
    font-weight: 700;
    margin-bottom: 0.5rem;

    @media screen and (max-width: 800px) {
      font-size: 0.85rem;
      margin-bottom: 0.45rem;
    }
  }
`;
