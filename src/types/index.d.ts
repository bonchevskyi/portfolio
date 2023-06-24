declare module '*.mp3';

export interface StyleProps {
    isOpen?: (() => void) | number | boolean,
    onMouseDown?: (() => void) | number | boolean,

    image?: string,
    geo?: string | boolean,
    desktopImgWidth?: string,
    tabletImgWidth?: string,
    mobileImgWidth?: string,
    $planetColor?: string,
    $bgColor?: string,
    isChanging?: boolean,
    $isActive?: boolean,
    planetData?: PlanetIT,
}
