// @flow
import * as React from 'react';
import styled from 'styled-components';
import { font, phoneMedia } from './common';
import TextArea from 'react-textarea-autosize';

const Root = styled.div`
    border: 1px solid black;
    padding: 6px;
    font: ${font};

    @media ${phoneMedia} {
        font-size: 20px;
        padding: 8px;
    }
`;

const TextField = styled(TextArea)`
    border: none;
    width: 100%;
    resize: none;
`;

type Props = {
    value: string,
    onChange: string => mixed,
};

const wrapEvent = cb => e => cb(e.target.value);

const ToolList = ({ onChange, value }: Props) => (
    <Root>
        <TextField value={value} onChange={wrapEvent(onChange)} />
    </Root>
);

export default ToolList;
