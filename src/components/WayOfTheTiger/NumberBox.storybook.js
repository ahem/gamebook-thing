// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies

import NumberBox from './NumberBox';

class Wrapper extends React.PureComponent<*, *> {
    state = {
        value: 4,
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

storiesOf('WayOfTheTiger/NumberBox', module).add('standard', () => {
    return (
        <div style={{ maxWidth: '300px' }}>
            <Wrapper>{props => <NumberBox name="Punch" {...props} />}</Wrapper>
        </div>
    );
});
