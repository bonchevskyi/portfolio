import styled from '@emotion/styled';
import { MainSection } from 'GlobalStyles';

export const ExperienceMain = styled(MainSection)`
  @media screen and (width <= 992px) {
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
  width: auto;
  padding: 2rem;
  flex-direction: column;
  margin-right: auto;

  @media screen and (width <= 992px) {
    flex: 1;
    margin: auto;
  }

  @media screen and (width <= 800px) {
    padding: 1rem;
  }

  h1 {
    width: fit-content;
    font-size: 3.5rem;
    font-family: var(--primaryFont);
    margin-bottom: 2rem;    
    border-bottom: 2px solid;
    border-radius: 5px;
    border-color: ${({ theme }) => theme.colors.primary[0]};

    @media screen and (width <= 992px) {
      font-size: 3.2rem;
    }

    @media screen and (width <= 800px) {
      font-size: 3rem;
      margin-bottom: 2rem;
      align-self: center;
    }

    @media screen and (width <= 600px) {
      font-size: 2.5rem;
    }
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  height: 140px;
  padding: 1.5rem;
  border-radius: 20px;
  margin-bottom: 1.5rem;
  background-color: ${({ theme }) => theme.colors.primary[4]};
  transition: background-color 250ms ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary[3]};
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
  background-color: ${({ theme }) => theme.colors.primary[0]};

  @media screen and (width <= 800px) {
    border-radius: 50%;
    width: 45px;
    height: 45px;
  }

  img {
    width: 36px;
    pointer-events: none;

    @media screen and (width <= 800px) {
      width: 30px;
    }
  }
`;

export const Image = styled.div`
  box-sizing: border-box;
  padding: 1rem;
  margin-left: auto;
  pointer-events: none;

  @media screen and (width <= 992px) {
    display: none;
  }

  img {
    width: 40rem;
    pointer-events: none;
  }
`;

export const Details = styled.div`
  margin-left: 0.6rem;

  h4 {
    font-family: var(--primaryFont);
    font-size: 1.225rem;
    font-weight: 600;
    color: ${({ theme }) => theme.white};

    @media screen and (width <= 800px) {
      font-size: 1.125rem;
      line-height: 126%;
    }
  }

  h5 {
    font-family: var(--primaryFont);
    font-size: 1.15rem;
    font-weight: 600;
    color: ${({ theme }) => theme.white};

    @media screen and (width <= 800px) {
      font-size: 1.05rem;
      line-height: 120%;
    }
  }

  h6 {
    font-family: var(--primaryFont);
    font-size: 0.85rem;
    font-weight: 400;
    margin-bottom: 0.5rem;
    white-space: pre-wrap;
    word-wrap: normal;    
    color: ${({ theme }) => theme.white};

    @media screen and (width <= 800px) {
      font-size: 0.85rem;
      margin-bottom: 0.45rem;
    }
  }
`;
