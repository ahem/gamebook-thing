// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies

import EncounterBox from './EncounterBox';

storiesOf('WayOfTheTiger/EncounterBox', module).add('standard', () => {
    return (
        <div style={{ maxWidth: '300px' }}>
            <EncounterBox name="Gorobei" endurance="14" />
        </div>
    );
});
