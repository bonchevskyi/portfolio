import styled from "styled-components";
import { device } from "src/devices";
import { ListItem, List, Button } from "@material-ui/core";

export const LanguageSelectMain = styled(Button)`
  && {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    position: relative;
  }
`;

export const SelectButton = styled(Button)`
  && {
    border-radius: 20%;
    padding: 5px;
    font-size: 0.8rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 0;
  }
`;

export const SelectList = styled(List)`
  && {
    font-family: var(--primaryFont);
    width: 64px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const SelectListItem = styled(ListItem)`
  && {
    display: flex;
    flex-direction: row;
    margin: 0;
    border-radius: 20%;
    padding: 5px;
    font-size: 0.8rem;
    align-items: center;
    justify-content: space-around;
  }
`;
