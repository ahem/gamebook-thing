// @flow
import * as React from 'react';
import styled from 'styled-components';
import { Text, phoneMedia, font } from './common';

const Root = styled.div`
    border: 1px solid black;
    padding: 6px;

    @media ${phoneMedia} {
        font-size: 20px;
        padding: 8px;
    }
`;

const Wrapper = styled.div`
    display: flex;
    margin-bottom: 6px
    justify-content: space-between;
    align-items: center;

    @media ${phoneMedia} {
        margin-bottom: 8px;
    }

`;

const EditField = styled.input`
    border: none;
    font: inherit;
    background: transparent;
    padding: 0;
    margin: 0 0 0 6px;
    font: ${font};
    flex: 1 1 auto;
    width: 0;
`;

type Props = {
    name: string,
    endurance: string,
    onChange?: ({ name: string, endurance: string }) => mixed,
};

const mapChangeEvent = f => e => f(e.target.value);

const EncounterBox = ({ name, endurance, onChange }: Props) => (
    <Root>
        <Wrapper>
            <Text>Name:</Text>
            <EditField
                value={name}
                onChange={onChange && (e => onChange({ name: e.target.value, endurance }))}
            />
        </Wrapper>
        <Wrapper>
            <Text>Endurance:</Text>
            <EditField
                type="tel"
                value={endurance}
                onChange={onChange && (e => onChange({ name, endurance: e.target.value }))}
            />
        </Wrapper>
    </Root>
);

export default EncounterBox;
