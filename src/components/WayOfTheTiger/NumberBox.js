// @flow
import * as React from 'react';
import styled from 'styled-components';
import { Text, phoneMedia, font } from './common';

const Root = styled.div`
    border: 1px solid black;
    display: flex;
    padding: 6px;
    justify-content: space-between;
    align-items: center;

    @media ${phoneMedia} {
        font-size: 20px;
        padding: 8px;
    }
`;

const EditField = styled.input`
    border: none;
    text-align: right;
    font: inherit;
    background: transparent;
    padding: 0;
    margin: 0;
    font: ${font};
    flex: 1 1 auto;
    width: 0;
`;

type Props = {
    name: string,
    value: string,
    onChange?: string => mixed,
};

const mapChangeEvent = f => e => f(e.target.value);

// const inputType =
//     typeof navigator !== 'undefined' &&
//     !!navigator.platform &&
//     /iPad|iPhone|iPod/.test(navigator.platform)
//         ? 'tel'
//         : 'number';

const NumberBox = ({ name, value, onChange }: Props) => (
    <Root>
        <Text>{name}</Text>
        <EditField type="tel" value={value} onChange={onChange && mapChangeEvent(onChange)} />
    </Root>
);

export default NumberBox;
