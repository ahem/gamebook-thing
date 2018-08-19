// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies

import WayOfTheTiger from './WayOfTheTiger';

storiesOf('WayOfTheTiger/WayOfTheTiger', module).add('main', () => {
    return <WayOfTheTiger bookmarks={[]} saveBookmarks={() => {}} />;
});
