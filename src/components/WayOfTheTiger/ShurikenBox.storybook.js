// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies

import ShurikenBox from './ShurikenBox';

class Wrapper extends React.PureComponent<*, *> {
    state = {
        count: 4,
    };

    render() {
        return this.props.children({
            onChange: count => {
                this.setState({ count });
            },
            count: this.state.count,
        });
    }
}

storiesOf('WayOfTheTiger/ShurikenBox', module)
    .add('standard', () => {
        return (
            <Wrapper>
                {props => (
                    <div style={{ maxWidth: '300px' }}>
                        <ShurikenBox {...props} />
                    </div>
                )}
            </Wrapper>
        );
    })
    .add('sized', () => {
        return (
            <Wrapper>
                {props => (
                    <div style={{ display: 'flex', width: '120px', height: '200px' }}>
                        <ShurikenBox {...props} />
                    </div>
                )}
            </Wrapper>
        );
    });
