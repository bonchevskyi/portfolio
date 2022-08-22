import styled from "styled-components";
import { device } from "src/devices";
import Grid from "@mui/material/Grid";

export const ProjectPageMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 100vh;
`;

export const Header = styled.div`
  height: 35vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

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
