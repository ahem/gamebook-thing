// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies

import EncounterBox from './EncounterBox';
import ItemList from './ItemList';

const items = [
    { name: 'Gorobei', endurance: '14' },
    { name: 'Dragon', endurance: '60' },
    { name: 'Eel', endurance: '2' },
];

storiesOf('WayOfTheTiger/ItemList', module).add('encounters', () => {
    return (
        <div style={{ maxWidth: '300px' }}>
            <ItemList
                items={items}
                template={o => <EncounterBox {...o} />}
                addItem={() => alert('add')}
                addItemText="Add encounter"
            />
        </div>
    );
});
