import {
    Menu,
    Header,
    Group,
    useMantineTheme,
} from '@mantine/core';
import {
    useDisclosure, useMediaQuery,
} from '@mantine/hooks';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { ThemeToggle, LanguagePicker } from 'components';
import {
    BurgerST, ContainerST, LinkST, HEADER_HEIGHT, DrawerST, Links, LinksDrawer, DrawerContent,
} from './Nav.styled';

interface HeaderActionProps {
    link: string;
    name: string;
}

export function Nav() {
    const { t } = useTranslation();
    const links = t('navbar.data', {
        returnObjects: true,
    }) as HeaderActionProps[];

    const theme = useMantineTheme();
    const [opened, { toggle, close }] = useDisclosure(false);
    const [navbarVariant, setNavbarVariant] = useState(false);

    const headerBg = navbarVariant ? theme.colors.secondary[0] : 'transparent';
    const isFilerOn = navbarVariant ? 'blur(10px)' : 'none';
    const isBoxShadow = navbarVariant ? theme.shadows.xs : 'none';
    const matches = useMediaQuery(`(max-width: ${theme.breakpoints.lg})`);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 50) {
            setNavbarVariant(true);
        } else if (scrolled === 0) {
            setNavbarVariant(false);
        }
    };

    window.addEventListener('scroll', toggleVisible);

    const menuItems = links?.map((link) => <Menu.Item key={link.link}>{link.name}</Menu.Item>);

    const items = links?.map((link) => {
        if (menuItems) {
            return (
                <Menu key={link.name} trigger="hover" transitionProps={{ exitDuration: 0 }} withinPortal>
                    <Menu.Target>
                        <LinkST
                            href={`#${link.link}`}
                        >
                            {link.name}
                        </LinkST>
                    </Menu.Target>
                </Menu>
            );
        }

        return (
            <LinkST
                key={link.name}
                href={`#${link.link}`}
            >
                {link.name}
            </LinkST>
        );
    });

    return (
        <Header
            height={HEADER_HEIGHT}
            sx={{
                boxShadow: isBoxShadow,
                border: 'none',
                transition: 'all 0.5s',
                backdropFilter: isFilerOn,
                background: headerBg,
            }}
            fixed
        >
            <ContainerST className="contttt" fluid>
                <DrawerContent className="content" matches={!!((matches && navbarVariant))}>
                    {!matches && (
                        <Links className="linksST" spacing={5}>
                            {items}
                        </Links>
                    )}
                    <Group>
                        <LanguagePicker />
                        <ThemeToggle />
                    </Group>
                    <BurgerST display={matches ? 'block' : 'none'} opened={opened} onClick={toggle} size="sm" />
                    <DrawerST overlayProps={{ opacity: 0.5, blur: 4 }} size={220} zIndex={9000} position="right" withCloseButton={false} opened={opened} onClose={close} title="RB">
                        <LinksDrawer spacing={0}>
                            {items}
                        </LinksDrawer>
                    </DrawerST>
                </DrawerContent>
            </ContainerST>
        </Header>
    );
}
