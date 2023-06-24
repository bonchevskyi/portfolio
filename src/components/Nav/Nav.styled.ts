import styled from '@emotion/styled';
import {
    Container,
    Group,
    Burger,
    rem,
    Drawer,
} from '@mantine/core';

interface NavProps {
    matches?: boolean,
}

export const HEADER_HEIGHT = rem(60);

export const ContainerST = styled(Container)`
  height: ${HEADER_HEIGHT};
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const Logo = styled.h1`
    font-family: "Kaushan Script";
    font-weight: bold;
    padding: 5px;
    margin: 0 0 0 0.5rem;
    border-bottom-width: 5px;
    border-bottom-style: solid;
    font-size: 1.5rem;
    user-select: none;
    text-align: center;
    -webkit-box-align: center;
    align-items: center;
    border-radius: 20%;    
`;

export const Links = styled(Group)`
  color: ${({ theme }) => theme.colors.primary[0]};
  font-size: 2.5rem;
  cursor: pointer;
  transition: color 1.3s;
  right: 0;

  @media (hover: hover) or (hover: none) {
    &:hover, &:active {
      color: ${({ theme }) => theme.colors.tertiary[0]};
    }
  }


  @media screen and (width <= ${({ theme }) => theme.breakpoints.lg}) {
    display: none;
  }
`;

export const LinksDrawer = styled(Group)`
  justify-content: center;
  color: ${({ theme }) => theme.colors.primary[0]};
  cursor: pointer;
  transition: color 0.3s;
  right: 0;

  a {
    font-size: 1.5rem;
    width: 100%;
    height: 100%;
    text-align: center;
  }

`;

export const BurgerST = styled(Burger)`
  @media (width <= ${({ theme }) => theme.fn.smallerThan('sm')}) {
    display: none;
  }
`;

export const LinkST = styled('a')`
    position: relative;
    display: inline-block;
    line-height: 1;      
    padding: 5px 12px;
    border: none;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.tertiary[0]};
    font-size: 1.1rem;
    font-weight: 500;
    cursor: pointer;
    margin: 0.6rem;
    text-align: center;
    min-width: 80px;
    transition: 0.3s linear;

    &:after {
      display: block;
      content: '';
      border-bottom: solid 3px ${({ theme }) => theme.colors.primary[0]};;  
      transform: scaleX(0);  
      transition: transform 250ms ease-in-out;
      margin-top: 5px;
    }
  
    @media (hover: hover) or (hover: none) {
      &:hover, &:active {        
        &:after {
          transform: scaleX(1);
        }
      }
      
     }

    @media (width <= ${({ theme }) => theme.fn.smallerThan('sm')}) {
      display: none;
    }
`;

export const LinkLabel = styled.span`  
    margin-right: ${({ theme }) => theme.colors.primary[0]};
`;

export const DrawerContent = styled(Group, { shouldForwardProp: (prop) => prop !== 'matches' })<NavProps>`
    transition: all 0.5s ease-in-out;
    justify-content: space-between;
    flex-grow: ${({ theme }) => theme.colors.primary[0]};
`;

export const DrawerST = styled(Drawer)`
  .bonchevskyi-Drawer-content {
    background-color: ${({ theme }) => theme.colors.secondary[0]};
  }

  .bonchevskyi-Drawer-header {
    background-color: ${({ theme }) => theme.colors.secondary[0]};
  }
  
  
  .bonchevskyi-Drawer-title {    
    font-family: "Kaushan Script";
    font-weight: bold;
    color: ${({ theme }) => theme.colors.tertiary[0]};
    padding: 5px;
    border-bottom-width: 5px;
    border-bottom-style: solid;
    font-size: 2.5rem;
    user-select: none;
    text-align: center;
    -webkit-box-align: center;
    align-items: center;
    border-radius: 20%;  
    margin: 0 auto;
  } 
`;
