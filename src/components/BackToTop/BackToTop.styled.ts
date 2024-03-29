import styled from '@emotion/styled';

export const BackToTopMain = styled.div`  position: fixed;
  right: 10px;
  bottom: 60px;
  height: 30px;
  font-size: 3rem;
  z-index: 999;

  @media screen and (width <= 800px) {
    right: -10px;
    bottom: 50px;
    font-size: 2.75rem;
  }

  button {
    outline: none;
    border: none;
    cursor: pointer;
    background: none;
    padding: 20px;
  }
`;
