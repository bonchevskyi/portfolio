import { useState } from 'react';
import i18next from 'i18next';
import {
    Menu, Group,
} from '@mantine/core';
import {
    Dropdown, Icon, Label, LanguageMenu, Select,
} from './LanguagePicker.styled';

const data = [
    {
        value: 'en', label: 'English', flag: 'gb',
    },
    {
        value: 'pl', label: 'Polski', flag: 'pl',
    },
    {
        value: 'ua', label: 'Українська', flag: 'ua',
    },
];

export function LanguagePicker() {
    const [opened, setOpened] = useState(false);
    const [selected, setSelected] = useState(data.find((lang) => lang.value === i18next.resolvedLanguage) || data[0]);
    const items = data.map((item) => (
        <Menu.Item
            onClick={() => {
            setSelected(item);
            i18next.changeLanguage(item.value);
          }}
            key={item.label}
        >
            {item.label}
        </Menu.Item>
    ));

    return (
        <LanguageMenu
            onOpen={() => setOpened(true)}
            onClose={() => setOpened(false)}
            radius="md"
            trigger="click"
            position="bottom"
            withArrow
            transitionProps={{ transition: 'scale', duration: 150 }}
        >
            <Menu.Target>
                <Select>
                    <Group spacing="md">
                        <Label>{selected.value.toUpperCase()}</Label>
                    </Group>
                    <Icon opened={opened || undefined} size="0.9rem" stroke="1.5px" />
                </Select>
            </Menu.Target>
            <Dropdown>
                {items}
            </Dropdown>
        </LanguageMenu>
    );
}
