import styled from "styled-components";
import { device } from "src/devices";

export const SingleBlogMain = styled.div`
  height: 420px;
  width: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: baseline;
  border-radius: 5px;

  &:hover img {
    filter: grayscale(0);
    transform: scale(1.1);
  }

  @media (min-width: 992px) and (max-width: 1380px) {
    height: 430px;
  }

  @media screen and (max-width: 992px) {
    height: 450px;
    background-color: rgb(171, 240, 240);
    margin: 2rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: baseline;
  }

  @media screen and (max-width: 800px) {
    height: 450px;
    margin: 1rem auto;
  }

  @media screen and (max-width: 700px) {
    height: 450px;
    margin: 1rem auto;
  }

  @media screen and (max-width: 600px) {
    height: 450px;
    width: 300px;
    margin: 1rem 0;
  }

  @media screen and (max-width: 320px) {
    transform: scale(0.9);
  }
`;

export const Image = styled.div`
  height: 50%;
  width: 100%;
  overflow: hidden;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;

  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    transition: transform 1s, filter 2s ease-in-out;
    filter: blur(1px);
    transform: scale(1);

    @media screen and (max-width: 600px) {
      filter: blur(0);
    }
  }
`;

export const Body = styled.div`
  padding: 1rem;

  p {
    font-family: var(--primaryFont);
    font-weight: 600;
    font-size: 13px;
    margin-bottom: 0.65rem;
  }

  h3 {
    font-family: var(--primaryFont);
    margin-bottom: 0.55rem;
    font-size: 19px;
    line-height: 115%;
  }

  h6 {
    font-family: "Noto Sans TC", sans-serif;
    font-size: 15px;
    line-height: 139%;
    font-weight: 500;
    opacity: 0.9;
  }
`;
