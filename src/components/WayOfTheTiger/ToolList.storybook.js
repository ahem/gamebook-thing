// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies

import ToolList from './ToolList';

const items = [
    ['Ninja Costume', true],
    ['Breathing Tube', false],
    ['Iron Sleeves', true],
    ['Garotte', true],
    ['Flash Powder', true],
    ['Flint & Tinder', false],
    ['Spiderfish', true],
    ['Blood of Nil', true],
];

storiesOf('WayOfTheTiger/ToolList', module).add('standard', () => {
    return (
        <div style={{ maxWidth: '300px' }}>
            <ToolList items={items} />
        </div>
    );
});
