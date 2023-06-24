import styled from '@emotion/styled';

export const Showcase = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border: 2px solid ${({ theme }) => theme.colors.tertiary[0]}; 
    border-radius: 50%;
    color: ${({ theme }) => theme.colors.tertiary[0]}; 

    position: relative;
    cursor: pointer;
    text-decoration: none;
    transition: all 0.3s;

    svg {
      font-size: 1.1rem;
      transition: 0.2s;
    }

    &:hover {      
      background-color: ${({ theme }) => theme.colors.secondary[0]}; 
      color: ${({ theme }) => theme.colors.primary[0]}; 
      transform: scale(1.1);
      border-color: ${({ theme }) => theme.colors.secondary[0]};

    }
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
  border-radius: 20px;
  transition: transform 0.9s;
  line-height: 110%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--primaryFont);
  background: ${({ theme }) => theme.colors.secondary[0]}; 
  color: ${({ theme }) => theme.colors.tertiary[0]}; 
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
  background: ${({ theme }) => theme.colors.secondary[0]}; 
  color: ${({ theme }) => theme.colors.tertiary[1]};   
  transition: transform 0.5s ease 0.3s;
  transform: translateX(100%);

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
  background-color: ${({ theme }) => theme.colors.primary[1]}; 

  @media (hover: hover) or (hover: none) {
    &:hover, &:active {
      img {
        opacity: 0;
      }
    
      ${Showcase} {
        a {
          &:nth-of-type(2) {
            transform: translateX(-140px) scale(1.1) !important;
            transition: transform 0.5s ease 0.3s;
          }
        }
      }
      ${Description} {
        transform: translate(-2%, 40%);
      }
    
      ${Technologies} {
        transform: translateX(0);
      }
    }
   }

  @media screen and (max-width: 600px) {
    width: 90%;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  color: ${({ theme }) => theme.colors.tertiary[0]}; 

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
    aspect-ratio: 16/9;
    transition: opacity 0.7s 0.3s;
  }
`;
