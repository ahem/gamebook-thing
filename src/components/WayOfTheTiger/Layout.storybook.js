// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies

import Layout from './Layout';

const props = {
    punchModifier: '0',
    onPunchModifierChange: () => {},
    kickModifier: '0',
    onKickModifierChange: () => {},
    throwModifier: '0',
    onThrowModifierChange: () => {},
    fateModifier: '0',
    onFateModifierChange: () => {},
    innerForce: '5',
    onInnerForceChange: () => {},
    endurance: '20',
    onEnduranceChange: () => {},
    shuriken: 5,
    onShurikenChange: () => {},
    ninjaTools: [
        ['Ninja Costume', true],
        ['Breathing Tube', true],
        ['Iron Sleeves', true],
        ['Garotte', true],
        ['Flash Powder', true],
        ['Flint & Tinder', true],
        ['Spiderfish', true],
        ['Blood of Nil', true],
    ],
    onNinjaToolChange: () => {},
    notes: '',
    onNotesChange: () => {},
    specialItems: '',
    onSpecialItemsChange: () => {},
    encounters: [{ name: '', endurance: '' }],
    addEncounter: () => {},
    onEncounterChange: () => () => {},
    bookmarks: [{ section: '306', time: '2018-09-22 18:37:22' }],
    addBookmark: () => {},
    onBookmarkClick: () => {},
};

storiesOf('WayOfTheTiger/Layout', module)
    .add('layout', () => {
        return <Layout {...props} />;
    })
    .add('many encounters', () => {
        return <Layout {...props} encounters={new Array(15).fill({ name: '', endurance: '' })} />;
    });
