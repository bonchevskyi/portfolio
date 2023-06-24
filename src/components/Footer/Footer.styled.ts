import styled from '@emotion/styled';

export const FooterMain = styled.div`
  font-family: "var(--primaryFont)", sans-serif;
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;  
  background-color: ${({ theme }) => theme.colors.secondary[0]};

  p {
    font-weight: 500;
    font-family: var(--primaryFont);
    font-size: 18px;
    color: ${({ theme }) => theme.colors.tertiary[0]};
  }

  span {
    font-size: 24px;
    color: ${({ theme }) => theme.colors.primary[0]};
    margin: 0 0.5rem;
  }
`;
