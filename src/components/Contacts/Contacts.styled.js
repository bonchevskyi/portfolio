import styled from "styled-components";
import { device } from "src/devices";

export const ContactsMain = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 2rem 6rem 3rem;
  width: 100%;
  height: 100%;
  margin-top: 2rem;

  @media (min-width: 992px) and (max-width: 1380px) {
    padding: 2rem 4rem;
    width: 90%;
    margin-top: 1rem;
  }

  @media screen and (max-width: 992px) {
    width: 100%;
    margin-top: 1rem;
  }

  @media screen and (max-width: 800px) {
    padding: 2rem;
    margin-top: 0rem;
    align-items: center;
  }

  h1 {
    font-family: var(--primaryFont);
    font-size: 3.5rem;
    margin-bottom: 2.5rem;
    text-align: center;
    /* margin-left: 2rem; */
    width: 100%;
    /* background-color: aqua; */

    @media screen and (max-width: 992px) {
      font-size: 3rem;
      margin: 0 0 1.2rem 0;
    }

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

export const InputContainer = styled.div`
  width: 100%;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;

  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Form = styled.div`
  display: flex;
  flex: 0.4;
  width: 100%;

  @media screen and (max-width: 800px) {
    display: flex;
    flex: 1;
    width: 80%;
  }

  @media screen and (max-width: 600px) {
    display: flex;
    flex: 1;
    width: 100%;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-evenly;
    width: 100%;

    @media screen and (max-width: 800px) {
      align-items: flex-end;
    }
  }
`;

export const FormInput = styled.input`
  height: 50px;
  box-sizing: border-box;
  border-radius: 50px;
  outline: none;
  margin-bottom: 2rem;
  padding: 0.7rem 0.7rem;
  border-radius: 20px;
  width: 100%;
  resize: none;

  @media screen and (max-width: 800px) {
    margin-bottom: 0.45rem;
  }
`;

export const FormMessage = styled.textarea`
  height: 150px;
  box-sizing: border-box;
  border-radius: 50px;
  outline: none;
  margin-bottom: 2rem;
  padding: 0.7rem 0.7rem;
  border-radius: 20px;
  width: 100%;
  resize: none;
`;

export const SubmitButton = styled.div`
  @media screen and (max-width: 800px) {
    align-self: center;
  }
  button {
    border: none;
    outline: none;
    width: 140px;
    height: 50px;
    border-radius: 50px;
    font-weight: 500;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    cursor: pointer;
  }

  button p {
    font-size: 16px;
    font-family: var(--primaryFont);
  }
`;

export const SubmitIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
`;

export const SendIcon = styled.div`
  font-size: 25px;
  transform-origin: center;
  transform: translate(5px, -3px) rotate(-30deg);
`;

export const SuccessIcon = styled.div`
  font-size: 28px;
  transition: all 0.3s 0.8s ease-in-out;
`;

export const ContactsDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
  flex: 1;
  box-sizing: border-box;
  padding-left: 7rem;
  margin-top: 1.2rem;

  @media screen and (max-width: 992px) {
    padding-left: 4rem;
  }

  @media screen and (max-width: 800px) {
    padding-left: 0rem;
    padding: 1rem;
    align-items: center;
    margin-top: 2rem;
  }

  @media screen and (max-width: 400px) {
    padding-left: 0rem;
    padding: 0rem;
    align-items: center;
    margin-top: 2rem;
  }

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-device-pixel-ratio: 2) and (device-aspect-ratio: 2/3) {
    padding-left: 0rem;
    padding: 0rem;
  }
`;

export const PersonalDetails = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  //width: 100%;
  margin-bottom: 2.5rem;
  cursor: pointer;

  @media screen and (max-width: 800px) {
    margin-bottom: 1.8rem;
  }

  p {
    margin-left: 1.5rem;
    font-size: 1rem;
    line-height: 110%;
    font-weight: 500;
    font-family: var(--primaryFont);
    width: 100%;

    word-break: break-word;

    @media screen and (max-width: 992px) {
      margin-left: 1rem;
      font-size: 1rem;
    }

    @media screen and (max-width: 800px) {
      font-size: 0.8rem;
      margin-left: 1.2rem;
      width: 50vw;
    }
  }
`;

export const SocialMediaIcons = styled.div`
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 4rem;

  @media screen and (max-width: 800px) {
    width: 100%;
    gap: 1.5rem;
    margin-top: 2rem;
  }
`;

export const Image = styled.img`
  position: absolute;
  right: 30px;
  /* bottom: 10px; */
  width: 40rem;
  pointer-events: none;

  @media (min-width: 992px) and (max-width: 1380px) {
    right: 0;
    bottom: 270px;
    width: 20rem;
  }

  @media screen and (max-width: 992px) {
    display: none;
  }
`;
