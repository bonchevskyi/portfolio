import {
    Group, useMantineColorScheme, useMantineTheme,
} from '@mantine/core';
import { BsSun, BsMoonStars } from 'react-icons/bs';
import { ToggleButton } from './ThemeToggle.styled';

export function ThemeToggle() {
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    const theme = useMantineTheme();

    return (
        <Group position="center">
            <ToggleButton
                checked={colorScheme === 'dark'}
                onChange={() => toggleColorScheme()}
                size="lg"
                onLabel={<BsSun color={theme.colors.tertiary[0]} size="1rem" stroke="1.5" />}
                offLabel={<BsMoonStars color={theme.colors.secondary[0]} size="1rem" stroke="1.5" />}
            />
        </Group>
    );
}
