// @flow
import { configure } from '@storybook/react';

// $FlowFixMe
const req = require.context('../src', true, /.storybook.js$/);

function loadStories() {
    req.keys().forEach(filename => req(filename))
}

configure(loadStories, module);
