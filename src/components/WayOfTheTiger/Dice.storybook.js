// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies

import Dice from './Dice';

storiesOf('WayOfTheTiger/Dice', module).add('faces', () => {
    return (
        <div style={{ maxWidth: '50px' }}>
            <Dice value={1} />
            <Dice value={2} />
            <Dice value={3} />
            <Dice value={4} />
            <Dice value={5} />
            <Dice value={6} />
        </div>
    );
});
