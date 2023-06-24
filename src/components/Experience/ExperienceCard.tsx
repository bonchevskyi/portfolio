import { useMantineTheme } from '@mantine/core';
import expIconWhite from 'assets/svg/expIconWhite.svg';
import expIconBlack from 'assets/svg/expIconBlack.svg';
import { Card, CardImg, Details } from './Experience.styled';

interface Props {
    id: number,
    company: string,
    jobtitle: string,
    startYear: string,
    endYear: string,
}

export function ExperienceCard({
    id, company, jobtitle, startYear, endYear,
}: Props) {
    const theme = useMantineTheme();

    return (
        <Card key={id}>
            <CardImg>
                <img
                    loading="lazy"
                    src={theme.colorScheme === 'light' ? expIconBlack : expIconWhite}
                    alt=""
                />
            </CardImg>
            <Details>
                <h6>
                    {startYear}
                    &nbsp; - &nbsp;
                    {endYear}
                </h6>
                <h4>{jobtitle}</h4>
                <h5>{company}</h5>
            </Details>
        </Card>
    );
}
