// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies

import DiceButton from './DiceButton';

storiesOf('WayOfTheTiger/DiceButton', module)
    .add('one dice', () => {
        return (
            <div style={{ maxWidth: '300px' }}>
                <DiceButton dice={1} />
            </div>
        );
    })
    .add('two dice', () => {
        return (
            <div style={{ maxWidth: '300px' }}>
                <DiceButton dice={2} />
            </div>
        );
    });
