import { useMantineTheme } from '@mantine/core';
import eduIconWhite from 'assets/svg/eduIconWhite.svg';
import eduIconBlack from 'assets/svg/eduIconBlack.svg';

import { Card, CardImg, Details } from './Education.styled';

interface Props {
    id: number,
    institution: string,
    course: string,
    startYear: string,
    endYear: string,
}

export function EducationCard({
    id, institution, course, startYear, endYear,
}: Props) {
    const theme = useMantineTheme();

    return (
        <Card key={id}>
            <CardImg>
                <img
                    loading="lazy"
                    src={theme.colorScheme === 'light' ? eduIconBlack : eduIconWhite}
                    alt=""
                />
            </CardImg>
            <Details>
                <h6>
                    {startYear}
                    -
                    {endYear}
                </h6>
                <h4>{course}</h4>
                <h5>{institution}</h5>
            </Details>
        </Card>
    );
}
