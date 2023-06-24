import styled from '@emotion/styled';
import { Grid } from '@mantine/core';
import { MainSection } from 'GlobalStyles';

export const ProjectPageMain = styled(MainSection)`
  justify-content: flex-start;
  background-color: ${({ theme }) => theme.colors.secondary[0]};  
`;

export const Header = styled.div`
  height: 35vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative; 
  color: ${({ theme }) => theme.colors.primary[0]};

  svg {    
    color: ${({ theme }) => theme.colors.primary[0]};
    position: absolute;
    top: 25px;
    left: 25px;
    padding: 7px;
    border-radius: 50%;
    box-sizing: content-box;
    font-size: 2rem;
    cursor: pointer;
    box-shadow: 3px 3px 6px #ffffff40, -3px -3px 6px #00000050;
    transition: 0.3s ease-in-out;

    &:hover {      
      color: ${({ theme }) => theme.colors.tertiary[0]};
      transform: scale(1.1);
    }
  
    @media screen and (width <= ${({ theme }) => theme.breakpoints.sm}) {      
      font-size: 1.8rem;
    }

  }

  @media screen and (max-width: 992px) {
    height: 25vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media screen and (max-width: 400px) {
    height: 20vh;
  }

  h1 {
    font-size: 4rem;
    font-family: var(--primaryFont);
    color: ${({ theme }) => theme.colors.tertiary[0]};

    @media screen and (max-width: 550px) {
      font-size: 3rem;
    }

    @media screen and (max-width: 400px) {
      font-size: 2.5rem;
    }
  }
`;

export const Container = styled.div`
  padding: 3rem 2rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const Search = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  input {
    width: 40%;
    height: 2.75rem;
    outline: none;
    border-radius: 20px;
    padding: 0.95rem 1rem;
    color: ${({ theme }) => theme.colors.tertiary[0]};    
    font-family: var(--primaryFont);
    font-weight: 500;
    font-size: 0.9rem;    
    background-color: ${({ theme }) => theme.colors.secondary[0]};
    border: 4px solid ${({ theme }) => theme.colors.primary[3]};

    &:focus {
      border-color: ${({ theme }) => theme.colors.primary[0]};
    }  
    
    &::placeholder {
      color: ${({ theme }) => theme.colors.tertiary[1]};
    }
  }

    @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
      width: 350px;
    }
`;

export const ProjectContainer = styled.div`
  margin-top: 5rem;
  width: 100%;
`;

export const ProjectGrid = styled(Grid)`
  display: flex;
  gap: 4rem;

  @media screen and (max-width: 992px) {
    gap: 3rem;
  }

  @media screen and (max-width: 702px) {
    gap: 1.5rem;
  }
`;
