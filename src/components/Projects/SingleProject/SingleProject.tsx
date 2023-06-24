/* eslint-disable react/no-array-index-key */
import { FaPlay, FaCode } from 'react-icons/fa';
import {
    Content,
    Description,
    Showcase,
    SingleProjectMain,
    Technologies,
} from './SingleProject.styled';

interface Props {
    id: number,
    name: string,
    desc: string,
    tags: string[],
    code: string,
    demo: string,
    imageName: string,
}

export function SingleProject({
    id, name, desc, tags, code, demo, imageName,
}: Props) {
    return (
        <SingleProjectMain key={`${id}-project`}>
            <Content>
                <h2 id={name.replace(' ', '-').toLowerCase()}>
                    {name}
                </h2>
                <img loading="lazy" src={`projects/preview-${imageName}.png`} alt={name} />
                <Showcase>
                    <a
                        href={demo}
                        target="_blank"
                        rel="noreferrer"
                        aria-labelledby={`${name.replace(' ', '-').toLowerCase()} ${name.replace(' ', '-').toLowerCase()}-demo`}
                    >
                        <FaPlay
                            id={`${name.replace(' ', '-').toLowerCase()}-demo`}
                            aria-label="Demo"
                        />
                    </a>
                    <a
                        href={code}
                        target="_blank"
                        rel="noreferrer"
                        aria-labelledby={`${name.replace(' ', '-').toLowerCase()} ${name.replace(' ', '-').toLowerCase()}-code`}
                    >
                        <FaCode
                            id={`${name.replace(' ', '-').toLowerCase()}-code`}
                            aria-label="Code"
                        />
                    </a>
                </Showcase>
            </Content>
            <Description>{desc}</Description>
            <Technologies>
                {tags.map((tag) => (
                    <span key={`${name.replace(' ', '-').toLowerCase()}-${id}-${tag.replace(' ', '-').toLowerCase()}`}>{tag}</span>
                ))}
            </Technologies>
        </SingleProjectMain>
    );
}
