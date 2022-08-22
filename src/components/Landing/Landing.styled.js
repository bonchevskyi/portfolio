import styled from "styled-components";
import { device } from "src/devices";

export const LandingMain = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-device-pixel-ratio: 2) and (device-aspect-ratio: 2/3) {
    height: 100%;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%; //MOD
  position: relative;
  //border: 3px solid red;

  @media (max-width: 600px) {
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

  @media (max-width: 1100px) {
    margin-top: 1rem;
    flex-direction: column;
    width: 200px;
    height: 120px;
    align-items: flex-start;
  }

  @media (max-width: 900px) {
    margin-top: 1rem;
    flex-direction: column;
    width: 200px;
    height: 120px;
    align-items: flex-start;

    button:nth-child(2) {
      display: none;
    }
  }

  @media (max-width: 600px) {
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

export const ContainerLeft = styled.div`
  flex: 35%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;

  @media (max-width: 600px) {
    flex: initial;
    width: 100%;
    height: 30%;
  }
`;

export const ContainerRight = styled.div`
  flex: 65%;
  height: 100%;
  background-color: #eaeaea;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;

  @media (max-width: 600px) {
    box-sizing: border-box;
    padding: 0 2rem;
    flex: initial;
    height: 70%;
    width: 100%;
    background-color: #eaeaea;
    align-items: center;
    justify-content: center;
    padding: 0 2rem;
  }
`;

export const ContentLeft = styled.div`
  margin: 3rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  @media (max-width: 1100px) {
    margin: 2rem;
  }
`;

export const ContentRight = styled.div`
  width: 45%;
  margin-right: 7rem;
  font-family: var(--primaryFont);
  font-style: normal;

  @media (max-width: 900px) {
    width: 60%;
    margin-top: 10%;
    margin-right: 6%;
  }

  @media (max-width: 600px) {
    margin-top: 20%;
    margin-right: initial;
    width: 100%;
  }

  @media (max-width: 500px) {
    margin-top: 35%;
  }

  @media (max-width: 370px) {
    margin-top: 60%;
  }

  p {
    margin-top: 1.45rem;
    font-weight: 500;
    font-size: 1.15rem;
    opacity: 0.7;

    @media (max-width: 1100px) {
      margin-top: 0.3rem;
      margin-bottom: 1rem;
      font-weight: 500;
      font-size: 1rem;
    }

    @media (max-width: 600px) {
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

    @media (max-width: 1100px) {
      font-size: 3rem;
    }

    @media (max-width: 600px) {
      font-size: 2.5rem;
      text-align: center;
    }
  }

  h6 {
    font-weight: 500;
    font-size: 1.25rem;
    margin-bottom: -0.85rem;
    opacity: 0.8;

    @media (max-width: 1100px) {
      font-size: 1.1rem;
    }

    @media (max-width: 600px) {
      font-size: 1rem;
      text-align: center;
    }
  }
`;

export const Social = styled.div`
  font-size: 35px;
  margin: 0 1rem;
  transition: transform 0.5s;

  &:hover {
    transform: scale(1.2);
  }

  @media (max-width: 900px) {
    font-size: 30px;
  }

  @media (max-width: 600px) {
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
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
  transition: opacity 0.3s;

  @media (max-width: 1100px) {
    --img-size: 350px;
  }

  @media (max-width: 900px) {
    --img-size: 300px;
  }

  @media (max-width: 600px) {
    --img-size: 200px;
    left: 50%;
    top: 30%;
    border: 8px solid #eaeaea;
    transform: translate(-50%, -50%);
  }

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-device-pixel-ratio: 2) and (device-aspect-ratio: 2/3) {
    --img-size: 150px;
    left: 50%;
    top: 20%;
  }
`;
