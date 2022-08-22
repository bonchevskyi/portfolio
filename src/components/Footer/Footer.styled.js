import styled from "styled-components";
import { device } from "src/devices";

export const FooterMain = styled.div`
  font-family: "var(--primaryFont)", sans-serif;
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  P {
    font-weight: 500;
    font-family: var(--primaryFont);
    font-size: 18px;
  }

  p span {
    font-size: 24px;
  }
`;
