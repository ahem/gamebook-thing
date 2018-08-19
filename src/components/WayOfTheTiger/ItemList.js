// @flow
import * as React from 'react';
import styled from 'styled-components';
import { phoneMedia, font } from './common';

const Root = styled.div`
    display: flex;
    flex-direction: column;
`;

const ItemWrapper = styled.div`
    margin-bottom: 6px;
`;

const Button = styled.button.attrs({ type: 'button' })`
    border: none;
    background: none;
    padding: 6px;
    font: ${font};
    border: 1px dashed black;
    cursor: pointer;

    @media ${phoneMedia} {
        height: 44px;
    }
`;

type Props<T> = {
    items: T[],
    template: (T, number) => React.Node,
    addItem: () => mixed,
    addItemText: string,
};

const ItemList = <T>({ items, template, addItem, addItemText }: Props<T>) => (
    <Root>
        {items.map(template).map((child, idx) => (
            <ItemWrapper key={idx}>{child}</ItemWrapper>
        ))}
        <Button onClick={addItem}>{addItemText}</Button>
    </Root>
);

export default ItemList;
