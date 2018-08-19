// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies

import Notes from './Notes';

class Wrapper extends React.PureComponent<*, *> {
    state = {
        value: 'Something, something. And then something else.',
    };

    render() {
        return this.props.children({
            onChange: value => {
                this.setState({ value });
            },
            value: this.state.value,
        });
    }
}

storiesOf('WayOfTheTiger/Notes', module).add('standard', () => {
    return (
        <div style={{ maxWidth: '300px' }}>
            <Wrapper>{props => <Notes {...props} />}</Wrapper>
        </div>
    );
});
