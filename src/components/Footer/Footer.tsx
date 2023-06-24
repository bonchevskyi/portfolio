import { headerData } from 'data';
import { FooterMain } from './Footer.styled';

export function Footer() {
    const shortName = (name) => {
        if (name.length > 10) {
            return name.split(' ')[0];
        }
        return name;
    };

    return (
        <FooterMain>
            <p>
                Made with
                <span>❤</span>
                by
                {' '}
                {shortName(headerData.name)}
            </p>
        </FooterMain>
    );
}
