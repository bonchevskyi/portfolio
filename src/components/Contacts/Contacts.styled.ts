import styled from '@emotion/styled';
import { Notification } from '@mantine/core';
import { MainSection } from 'GlobalStyles';

export const ContactsMain = styled(MainSection)`
  flex-direction: row;
  position: relative;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 2rem 6rem 3rem;
  height: 100%;
  margin-left: auto;

  @media (width >= 992px) and (width <= 1380px) {
    padding: 2rem 4rem;
    width: 90%;
    margin-top: 1rem;
  }

  @media screen and (width <= 992px) {
    width: 100%;
    margin-top: 1rem;
  }

  @media screen and (width <= 800px) {
    padding: 2rem;
    margin-top: 0;
    align-items: center;
  }

  h1 {
    font-family: var(--primaryFont);
    font-size: 3.5rem;
    margin-bottom: 2.5rem;
    text-align: center;
    width: fit-content;   
    border-bottom: 2px solid;
    border-radius: 5px;
    border-color: ${({ theme }) => theme.colors.primary[0]};

    @media screen and (width <= 992px) {
      font-size: 3rem;
      margin: 0 0 1.2rem;
    }

    @media screen and (width <= 800px) {
      font-size: 3rem;
      margin-bottom: 30px;
    }

    @media screen and (width <= 600px) {
      font-size: 2.5rem;
      margin-bottom: 20px;
    }
  }
`;

export const InputContainer = styled.div`
  width: 100%;

  > label {
    display: inline-flex;
    background-color: ${({ theme }) => theme.colors.secondary[0]};
    font-family: var(--primaryFont);
    font-weight: 600;
    font-size: 0.9rem;
    padding: 0 5px;
    transform: translate(25px, 50%);
  }
`;

export const Body = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;

  @media screen and (width <= ${({ theme }) => theme.breakpoints.lg}) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Form = styled.div`
  display: flex;
  width: 100%;
  min-width: 300px;

  @media screen and (width <= 800px) {
    display: flex;
    flex: 1;
    width: 80%;
  }

  @media screen and (width <= 600px) {
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

    @media screen and (width <= 800px) {
      align-items: flex-end;
    }
  }
`;

export const FormInput = styled.input`  
  height: 50px;
  outline: none;
  margin-bottom: 2rem;
  padding: 0.7rem;
  font-family: var(--primaryFont);
  font-weight: 500;
  border-radius: 20px;
  border: 4px solid ${({ theme }) => theme.colors.primary[3]};
  background-color: ${({ theme }) => theme.colors.secondary[0]};
  color: ${({ theme }) => theme.colors.secondary[0]};
  width: 100%;
  resize: none;
  transition: border 0.2s ease-in-out;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary[0]};
  }

  @media screen and (width <= 800px) {
    margin-bottom: 0.45rem;
  }
`;

export const FormMessage = styled(FormInput.withComponent('textarea'))`
  height: 150px;
`;

export const SubmitButton = styled.div`
    margin: 0 auto;    

    > button {
      border: none;
      outline: none;
      width: 140px;
      height: 50px;
      border-radius: 50px;
      font-weight: 500;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      column-gap: 10px;
      cursor: pointer;      
      background-color: ${({ theme }) => theme.colors.primary[0]};
      color: ${({ theme }) => theme.colors.secondary[0]};
      transition: 250ms ease-in-out;

      &:hover {        
        transform: scale(1.08);
        background-color: ${({ theme }) => theme.colors.tertiary[0]};
      }
    }

    button p {
      font-size: 16px;
      font-family: var(--primaryFont);
    }
    @media screen and (width <= 800px) {
      align-self: center;
    }
`;

export const SubmitIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
`;

export const ContactsDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
  box-sizing: border-box;
  padding-left: 7rem;
  margin-top: 1.2rem;
  width: 100%;

  @media screen and (width <= ${({ theme }) => theme.breakpoints.lg}) {
    padding: 0;

    > a {
      width: 50%;
      margin: 0 auto;
      white-space: nowrap;
      
      @media screen and (width <= 500px) {
        align-items: center;
        margin: 0;
      }
    }
  }

  @media screen and (width <= 992px) {
    padding-left: 4rem;
  }

  @media screen and (width <= 800px) {
    padding-left: 0;
    align-items: center;
    margin-top: 2rem;
  }

`;

export const SocialMediaIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;

  > a {    
    width: 45px;
    height: 45px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 21px;
    background-color: ${({ theme }) => theme.colors.primary[0]};
    color: ${({ theme }) => theme.colors.secondary[0]};
    transition: 250ms ease-in-out;

    &:hover {
      transform: scale(1.1);
      background-color: ${({ theme }) => theme.colors.tertiary[0]};
    }
  }

  @media screen and (width <= ${({ theme }) => theme.breakpoints.lg}) {
    width: 100%;
    gap: 1.5rem;
    margin-top: 2rem;
  }
`;

export const Image = styled.img`
  width: 40rem;
  margin-right: auto;
  pointer-events: none;

  @media (width >= 992px) and (width <= 1380px) {
    right: 0;
    bottom: 270px;
    width: 20rem;
  }

  @media screen and (width <= ${({ theme }) => theme.breakpoints.lg}) {
    display: none;
  }
`;

export const NotificationST = styled(Notification)`
  position: fixed;
  bottom: 1.25rem;
  left: 1.25rem;
  z-index: 300;
`;
