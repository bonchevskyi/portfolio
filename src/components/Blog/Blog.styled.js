import styled from "styled-components";
import { device } from "src/devices";

export const BlogMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 100vh;
  padding: 2rem;
  overflow-x: hidden;
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
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 4.5rem;

  @media screen and (max-width: 992px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
`;

export const ViewAll = styled.div`
  width: 100%;
  margin-top: 1rem;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 600px) {
    position: relative;
    margin-top: 2.5rem;
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

  a {
    @media screen and (max-width: 600px) {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;
