import styled from "styled-components";
import { device } from "src/devices";

export const ProjectsMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 100vh;
  overflow-x: hidden;
  padding: 2rem;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 1rem;

  h1 {
    margin-bottom: 40px;
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
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const BodyContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-content: center;
  grid-gap: 2.5rem;
  width: 90%;
  margin: auto;

  @media screen and (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
`;

export const ViewAll = styled.div`
  width: 100%;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 2rem;

  @media screen and (max-width: 600px) {
    position: relative;
    margin-top: 4rem;

    a {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  a button {
    outline: none;
    border: none;
    width: 150px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-transform: inherit;
    border-radius: 45px;
    font-size: 1.05rem;
    font-family: var(--primaryFont);
    font-weight: 500;
    padding-left: 1.5rem;
    cursor: pointer;
  }
`;
