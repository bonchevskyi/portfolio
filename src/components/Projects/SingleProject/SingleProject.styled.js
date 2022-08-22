import styled from "styled-components";
import { device } from "src/devices";

export const Showcase = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  a {
    position: relative;
    cursor: pointer;
    text-decoration: none;
    transition: transform 0.5s 0.3s;
  }
`;

export const Description = styled.p`
  position: absolute;
  width: 95%;
  height: 200px;
  left: 0;
  top: 0;
  transform: translate(-110%, 40%);
  padding: 15px;
  border-radius: 0 20px 20px 0;
  transition: transform 0.9s;
  line-height: 110%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--primaryFont);
`;

export const Technologies = styled.div`
  position: absolute;
  bottom: 20px;
  right: 0;
  width: 140px;
  font-size: 0.8rem;
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  flex-direction: column;
  border-radius: 10px 0 0 10px;
  padding: 0.825rem;

  transform: translateX(100%);
  transition: transform 0.5s 0.3s;

  span {
    font-family: var(--primaryFont);
    font-weight: 500;
    word-break: break-word;
    line-height: 100%;
  }
`;

export const SingleProjectMain = styled.div`
  box-shadow: 4px 4px 8px rgba(36, 3, 3, 0.2);
  width: 550px;
  /* width: 95%; */
  margin: auto;
  height: 460px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.4rem 1rem;
  position: relative;
  cursor: pointer;
  overflow: hidden;

  &:hover {
    img {
      opacity: 0;
    }

    ${Showcase} {
      a {
        &:nth-child(2) {
          transform: translateX(-140px) scale(1.1) !important;
          transition: transform 0.5s 0.3s;
        }
      }
      /* a &:nth-child(2) {
        transform: translateX(-140px) scale(1.1) !important;
      } */
    }
    ${Description} {
      transform: translate(-2%, 40%);
    }

    ${Technologies} {
      transform: translateX(0);
    }
  }

  @media screen and (max-width: 600px) {
    width: 300px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;

  h2 {
    font-family: var(--primaryFont);
    font-style: normal;
    font-weight: 600;
    font-size: 1.525rem;
    line-height: 110%;
    text-align: center;
  }

  img {
    width: 100%;
    height: 60%;
    transition: opacity 0.7s 0.3s;
  }
`;