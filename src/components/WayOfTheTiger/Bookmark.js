// @flow
import * as React from 'react';
import styled from 'styled-components';
import { Text, phoneMedia, font } from './common';

type Props = {
    section: string,
    time: string,
    onClick: () => mixed,
};

const Root = styled.div`
    font: ${font};
    padding: 6px;
    border: 1px solid black;

    @media ${phoneMedia} {
        font-size: 20px;
        padding: 8px;
    }
`;

const Time = styled.p`
    font-size: 12px;
    font-style: italic;
    margin: 0;
`;

const Link = styled.button`
    border: none;
    background: transparent;
    padding: 0;
    margin: 6px 0;
    display: block;
    text-decoration: underline;
    font: inherit;
    color: darkblue;
    cursor: pointer;
`;

const Bookmark = ({ section, time, onClick }: Props) => (
    <Root>
        <Link onClick={onClick}>Section {section}</Link>
        <Time>{time}</Time>
    </Root>
);

export default Bookmark;
