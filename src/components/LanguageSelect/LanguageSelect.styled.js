import styled from "styled-components";
import { device } from "src/devices";
import { MdKeyboardArrowDown } from "react-icons/md";
import { ListItem, List, Popover, Button } from "@material-ui/core";

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

export const SelectPopover = styled(Popover)`
  && {
    /* border: 5px solid red;
    border-radius: 20%;
    padding: 5px;
    //margin-left: auto;
    margin-left: 2rem;
    //font-size: 1.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    //position: relative; */
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
    //margin-left: auto;
    //font-size: 1.2rem;
    //width: 75px;
    //background: red !important;
    margin: 0;
    //padding: 5px;

    border-radius: 20%;
    padding: 5px;
    font-size: 0.8rem;
    align-items: center;
    justify-content: space-around;
    //justify-content: space-between;
    //position: relative;
  }
`;
