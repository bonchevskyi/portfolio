import styled, { keyframes } from "styled-components";
import { device } from "src/devices";

const magic = keyframes`
      0%, 100%{
        transform: translate(0,0);
    }
    25%{
        transform: translate(0,-20px);
    }
    50%{
        transform: translate(0,0px);
    }
    75%{
        transform: translate(0,-10px);
    }

    /* slide-up-fade

    0%, 100%{
        transform: translate(0,0);
        opacity: 1;
    }
    33%{
        transform: translate(0,-50px);
        opacity: 0;
    }
    67%{
        transform: translate(0,50px);
        opacity: 0;
    } */
    
`;

export const SingleServiceMain = styled.div`
  box-shadow: 4px 4px 8px rgba(36, 3, 3, 0.2);
  width: 180px;
  height: 180px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.4rem 1.4rem;
  /* overflow: hidden; */
  transition: transform 300ms ease-in-out;

  &:hover {
    transform: scale(1.15);

    svg {
      animation: ${magic} 0.7s ease-in-out both;
    }
  }

  @media screen and (max-width: 800px) {
    width: 160px;
    height: 160px;
    padding: 1.2rem 1.2rem;
  }

  @media screen and (max-width: 600px) {
    width: 150px;
    height: 150px;
    padding: 1.2rem 1.2rem;
  }
`;

export const Content = styled.div`
  position: relative;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;

  h4 {
    position: absolute;
    top: 60%;
    height: 60px;

    display: flex;
    align-items: center;
    justify-content: center;

    font-family: var(--primaryFont);
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    text-align: center;
    line-height: 110%;
    color: #000000;

    @media screen and (max-width: 800px) {
      font-size: 15px;
    }

    @media screen and (max-width: 600px) {
      font-size: 13px;
      top: 50%;
    }
  }
`;

export const Icon = styled.i`
  position: absolute;
  top: 15%;
  /* transform: translateY(-50%); */

  svg {
    font-size: 2.8rem;
    /* color: #000000; */

    @media screen and (max-width: 800px) {
      font-size: 2.5rem;
    }

    @media screen and (max-width: 600px) {
      font-size: 2.2rem;
    }
  }
`;
