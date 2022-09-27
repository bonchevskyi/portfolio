import styled from "styled-components";
import { device } from "src/devices";

export const SkillsMain = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 2.5rem 2rem 2rem 2rem;

  @media (min-width: 992px) and (max-width: 1380px) {
    padding: 2rem 1rem 1rem 1rem;
  }

  @media screen and (max-width: 992px) {
    padding: 1rem;
    min-height: 100%;
  }

  @media screen and (max-width: 800px) {
    padding: 0.5rem;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  h2 {
    font-family: var(--primaryFont);
    font-style: normal;
    font-weight: bold;
    font-size: 3.5rem;
    text-align: center;

    @media screen and (max-width: 992px) {
      font-size: 3.2rem;
    }

    @media screen and (max-width: 800px) {
      font-size: 3rem;
    }

    @media screen and (max-width: 600px) {
      font-size: 2.5rem;
    }
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  margin-top: 3.5rem;
  padding: 0 2rem;

  @media (min-width: 992px) and (max-width: 1380px) {
    flex-direction: column;
    align-items: center;
    padding: 1.5rem;
    margin-top: 1.5rem;
  }

  @media screen and (max-width: 992px) {
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    margin: 1rem 0;
  }

  @media screen and (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    padding: 0.5rem;
  }
`;

export const Scroll = styled.div`
  width: 100%;
  display: flex;

  @media screen and (max-width: 800px) {
    width: 100%;
    margin: 0;
  }
`;

export const ScrollDiv = styled.div`
  flex: 1;
  justify-content: center;
  margin: 0 1rem;

  h2 {
    font-family: var(--primaryFont);
    font-style: normal;
    font-weight: bold;
    font-size: 2rem;
    text-align: center;

    /* @media screen and (max-width: 992px) {
      margin-top: 1rem;
    }

    @media screen and (max-width: 800px) {
      font-size: 3rem;
    }

    @media screen and (max-width: 600px) {
      font-size: 2.5rem;
    } */
  }
`;

export const MarqueeDiv = styled.div`
  padding: 3rem 0;
`;

export const SkillBox = styled.div`
  background: #fafafa;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.12);
  border-radius: 10px;
  width: 110px;
  height: 110px;
  margin: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 1rem;
  transition: 300ms ease-in-out;

  &:hover {
    transform: scale(1.15);
  }

  @media screen and (max-width: 992px) {
    width: 100px;
    height: 100px;
    margin: 1.2rem;
    padding: 2rem 1rem;
  }

  @media screen and (max-width: 600px) {
    width: 90px;
    height: 90px;
    margin: 1.2rem;
    padding: 2rem 1rem;
  }

  img {
    height: 50px;
    pointer-events: none;

    @media screen and (max-width: 992px) {
      height: 45px;
    }

    @media screen and (max-width: 600px) {
      height: 40px;
    }
  }

  h3 {
    font-family: Big Shoulders Text;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    text-align: center;
    margin-top: 1rem;

    @media screen and (max-width: 992px) {
      font-size: 18px;
      margin-top: 1rem;
    }

    @media screen and (max-width: 600px) {
      font-size: 16px;
      margin-top: 1rem;
    }
  }
`;

export const SkillsTech = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  border-radius: 10px;
  margin: 1.5rem;

  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 2rem 1rem;
  transition: 300ms ease-in-out;

  @media screen and (max-width: 992px) {
    margin: 0;
    grid-template-columns: repeat(4, 1fr);
  }

  @media screen and (max-width: 800px) {
    margin: 0;
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const SkillsPersonal = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.12);
  border-radius: 10px;

  margin: 1.5rem;
  padding: 2rem 1rem;

  @media screen and (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
    margin: 0;
  }

  ul {
    margin: 0 5px;
    padding: 0 5px;
  }

  h3 {
    min-width: 450px;
    padding: 10px;
    border-radius: 10px;
    font-family: Big Shoulders Text;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    text-align: center;
    margin-top: 1rem;

    transition: 300ms ease-in-out;

    &:hover {
      transform: scale(1.08);
    }

    @media screen and (max-width: 992px) {
      min-width: 90vw;
      font-size: 18px;
      margin-top: 1rem;
    }

    @media screen and (max-width: 600px) {
      min-width: 90vw;
      font-size: 16px;
      margin-top: 1rem;
    }
  }
`;
