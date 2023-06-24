/* eslint-disable @typescript-eslint/naming-convention */
import styled from '@emotion/styled';
import {
    createPolymorphicComponent, UnstyledButton, UnstyledButtonProps, Menu,
} from '@mantine/core';
import { BsChevronDown } from 'react-icons/bs';

interface IconProps {
    opened: boolean,
}

export const LanguageMenu = styled(Menu)`
    border-radius: 2rem;
    text-align: center;
    color: ${({ theme }) => theme.white};
    background-color: ${({ theme }) => theme.colors.primary[0]};
`;

export const Dropdown = styled(Menu.Dropdown)`
    text-align: center;
    justify-content: center;
    background: ${({ theme }) => theme.colors.primary[0]};
`;

export const Label = styled.span`
    font-size: 1rem;
`;

const _Select = styled(UnstyledButton)`
    padding: 5px 12px;
    column-gap: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    border: none;

`;

export const Select = createPolymorphicComponent<'button', UnstyledButtonProps>(_Select);

export const Icon = styled(BsChevronDown, { shouldForwardProp: (prop) => prop !== 'opened' })<IconProps>`  
    color: ${({ theme }) => theme.white};
    transition: transform 150ms ease;
    transform:  ${({ opened }) => opened ? 'rotate(0.5turn)' : ''};
`;
