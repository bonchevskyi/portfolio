import styled from '@emotion/styled';
import { Switch } from '@mantine/core';

export const ToggleButton = styled(Switch)`
    .bonchevskyi-Switch-track {
        background-color: ${({ theme }) => theme.colors.primary[0]};
        border-color: ${({ theme }) => theme.colors.primary[0]};
    }
`;
