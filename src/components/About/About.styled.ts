import styled from '@emotion/styled';
import { MainSection } from 'GlobalStyles';

export const AboutMain = styled(MainSection)` 
  position: relative;
`;

export const Line = styled.div`
  position: absolute;
  top: 50px;
  left: 50%;
  transform: translateX(-50%);
  height: 50px;
  width: 85%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (width <= 992px) {
    top: 20px;
  }
`;

export const LineCircle = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.primary[0]};

  @media screen and (width <= 600px) {
    width: 5px;
    height: 5px;
    border-radius: 50%;
  }
`;

export const LineLine = styled.div`
  width: 95%;
  height: 5px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.primary[0]};

  @media screen and (width <= 800px) {
    width: 8px;
    height: 8px;
    border-radius: 50%;
  }

  @media screen and (width <= 600px) {
    width: 93%;
    height: 3px;
    border-radius: 10px;
  }
`;

export const Body = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: fit-content;

  @media screen and (width <= 992px) {
    padding-top: 2rem;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: space-evenly;
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
  flex: 0.5;
  width: 100%;
  height: fit-content;
  

  @media screen and (width <= 992px) {
    flex: 0.6;
    box-sizing: border-box;
    padding: 20px;
  }

  h2 {
    margin-bottom: 40px;
    font-size: 3.5rem;
    font-weight: 700;
    font-family: var(--primaryFont);
    border-bottom: 2px solid;
    border-radius: 5px;
    border-color: ${({ theme }) => theme.colors.primary[0]};

    @media (width >= 992px) and (width <= 1380px) {
      font-size: 3.3rem;
      margin-bottom: 30px;
    }

    @media screen and (width <= 992px) {
      font-size: 3rem;
      margin-bottom: 20px;
    }

    @media screen and (width <= 800px) {
      align-self: center;
    }

    @media screen and (width <= 600px) {
      font-size: 2.5rem;
    }
  }

  p {
    font-size: 1.25rem;
    font-family: var(--primaryFont);
    color: ${({ theme }) => theme.colors.tertiary[0]};

    @media (width >= 992px) and (width <= 1380px) {
      font-size: 1.15rem;
    }

    @media screen and (width <= 992px) {
      font-size: 1.1rem;
    }

    @media screen and (width <= 600px) {
      font-size: 0.95rem;
    }
  }
`;

export const Image = styled.div`
  margin-top: 40px;
  pointer-events: none;

  img {
    width: 40rem;
    flex: 0.5;

    @media (width >= 992px) and (width <= 1380px) {
      width: 300px;
    }

    @media screen and (width <= 992px) {
      width: 250px;
      flex: 0.4;
    }

    @media screen and (width <= 600px) {
      width: 200px;
    }
  }
`;
