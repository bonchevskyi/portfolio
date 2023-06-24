import {
    Affix, Button, rem, Transition,
} from '@mantine/core';
import { useWindowScroll } from '@mantine/hooks';
import { RxArrowUp } from 'react-icons/rx';

export function BackToTop() {
    const [scroll, scrollTo] = useWindowScroll();

    return (
        <Affix position={{ bottom: rem(20), right: rem(20) }}>
            <Transition transition="slide-up" mounted={scroll.y > 0}>
                {(transitionStyles) => (
                    <Button
                        uppercase
                        leftIcon={<RxArrowUp size="1rem" />}
                        style={transitionStyles}
                        onClick={() => scrollTo({ y: 0 })}
                    >
                        to top
                    </Button>
                )}
            </Transition>
        </Affix>
    );
}
