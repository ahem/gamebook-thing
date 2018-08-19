// @flow
import * as React from 'react';
import styled from 'styled-components';
import { font, phoneMedia } from './common';

const Root = styled.ul`
    border: 1px solid black;
    padding: 6px;
    margin: 0;
    font: ${font};

    @media ${phoneMedia} {
        font-size: 20px;
        padding: 8px;
    }
`;

const Item = styled.li`
    list-style: none;
    cursor: pointer;
`;

const Crossed = styled.s`
    color: grey;
    position: relative;
    text-decoration: none;

    &:after {
        content: ' ';
        background-color: grey;
        height: 1px;
        left: 0;
        position: absolute;
        top: calc(50% - 1px);
        width: 100%;
    }
`;

type Props = {
    items: [string, boolean][],
    onClick?: (string, boolean, number) => mixed,
};

const ToolList = ({ items, onClick }: Props) => (
    <Root>
        {items.map(([name, active], idx) => (
            <Item key={idx} onClick={onClick && (() => onClick(name, !active, idx))}>
                {active ? name : <Crossed>{name}</Crossed>}
            </Item>
        ))}
    </Root>
);

export default ToolList;
