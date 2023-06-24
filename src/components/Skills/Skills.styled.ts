import styled from '@emotion/styled';
import { MainSection } from 'GlobalStyles';

export const SkillsMain = styled(MainSection)`
 padding: 2.5rem 2rem 2rem 2rem;    

  @media (min-width: 992px) and (max-width: 1380px) {
    padding: 2rem 1rem 1rem 1rem;
  }

  @media screen and (max-width: 992px) {
    padding: 1rem;
    min-height: 100%;
  }

  @media screen and (max-width: 800px) {
    padding: 0.5rem;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;  

  h2 {
    font-family: var(--primaryFont);
    font-style: normal;
    font-weight: bold;
    font-size: 3.5rem;
    text-align: center;
    border-bottom: 2px solid;
    border-radius: 5px;
    border-color: ${({ theme }) => theme.colors.primary[0]};

    @media screen and (max-width: 992px) {
      font-size: 3.2rem;
    }

    @media screen and (max-width: 800px) {
      font-size: 3rem;
    }

    @media screen and (max-width: 600px) {
      font-size: 2.5rem;
    }
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  padding: 0 2rem;

  @media (min-width: 992px) and (max-width: 1380px) {
    flex-direction: column;
    align-items: center;
    padding: 1.5rem;
    margin-top: 1.5rem;
  }

  @media screen and (max-width: 992px) {
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    margin: 1rem 0;
  }

  @media screen and (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    padding: 0.5rem;
  }
`;

export const Scroll = styled.div`
  width: 100%;
  display: flex;

  @media screen and (max-width: 800px) {
    width: 100%;
    margin: 0;
  }
`;

export const ScrollDiv = styled.div`
  justify-content: center;
  margin: 0 1rem;

  h2 {
    font-family: var(--primaryFont);
    font-style: normal;
    font-weight: bold;
    font-size: 2rem;
    text-align: center;
  }
`;

export const MarqueeDiv = styled.div`
  padding: 3rem 0;
`;

export const SkillBox = styled.div`
  box-shadow: 0px 0px 15px ${({ theme }) => theme.colors.primary[5]};
  border-radius: 10px;
  width: 130px;
  height: 130px;
  margin: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 1rem;

  --c: ${({ theme }) => theme.colors.primary[0]}; // border-color
  --b: 4px; // border-width
  --g: 5px; // gap on hover

  padding: calc(var(--g) + var(--b));
  --_g: #0000 25%,var(--c) 0;
  background: 
    conic-gradient(from 180deg at top    var(--b) right var(--b),var(--_g))
    var(--_i,200%) 0  /200% var(--_i,var(--b))  no-repeat,
    conic-gradient(            at bottom var(--b) left  var(--b),var(--_g))
    0   var(--_i,200%)/var(--_i,var(--b)) 200%  no-repeat;
  transition: .3s, background-position .3s .3s;
  cursor: pointer;

  @media (hover: hover) or (hover: none) {
    &:hover, &:active {
      transform: scale(1.15);    
      --_i: 100%;
      transition: .3s, background-size .3s .3s;
    }
  }

  @media screen and (max-width: 992px) {
    width: 100px;
    height: 100px;
    margin: 1.2rem;
    padding: 2rem 1rem;
  }

  @media screen and (max-width: 600px) {
    width: 90px;
    height: 90px;
    margin: 1rem;
    padding: 2rem 1rem;
  }

  img {
    height: 50px;
    pointer-events: none;

    @media screen and (max-width: 992px) {
      height: 45px;
    }

    @media screen and (max-width: 600px) {
      height: 35px;
    }
  }

  h3 {
    font-family: Big Shoulders Text;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    text-align: center;
    margin-top: 1rem;
    color: ${({ theme }) => theme.colors.tertiary[0]};

    @media screen and (max-width: 992px) {
      font-size: 18px;
      margin-top: 1rem;
    }

    @media screen and (max-width: 600px) {
      font-size: 14px;
      margin-top: 1rem;
    }
  }
`;

export const SkillsTech = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  border-radius: 10px;
  margin: 1.5rem;
  gap: 1rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 1rem;
  transition: 300ms ease-in-out;

  @media screen and (max-width: 992px) {
    margin: 0;
    gap: 0;
    grid-template-columns: repeat(4, 1fr);
  }

  @media screen and (max-width: 800px) {
padding: 2rem 1rem;
  transition: 300ms ease-in-out;
  }

  @media screen and (max-width: 992px) {
    margin: 0;
    gap: 0;
    grid-template-columns: repeat(4, 1fr);
  }

  @media screen and (max-width: 800px) {
padding: 2rem 1rem;
  transition: 300ms ease-in-out;
  }

  @media screen and (max-width: 992px) {
    margin: 0;
    gap: 0;
    grid-template-columns: repeat(4, 1fr);
  }

  @media screen and (max-width: 800px) {
  padding: 2rem 1rem;
  transition: 300ms ease-in-out;
  }

  @media screen and (max-width: 992px) {
    margin: 0;
    gap: 0;
    grid-template-columns: repeat(4, 1fr);
  }

  @media screen and (max-width: 800px) {
    margin: 0;
    grid-template-columns: repeat(3, 1fr);
  }
`;
