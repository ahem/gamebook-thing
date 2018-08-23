// @flow
import * as React from 'react';
import styled from 'styled-components';
import Dice from './Dice';

type Props = {
    dice: number,
};

type State = {
    values: number[],
    rollingPlaceHolder: ?string,
};

const Root = styled.button.attrs({ type: 'button' })`
    border: 1px solid black;
    display: flex;
    background: none;
    height: 50px;
    width: 120px;
    padding: 4px 10px;
    margin: 0;
    justify-content: space-around;
    border-radius: 6px;
    font-size: 30px;
    line-height: 30px;
    outline: none;

    &:focus {
        border-color: blue;
    }
`;

const Wrapper = styled.div`
    width: 40px;
    height: 40px;
`;

function wait(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
}

class DiceButton extends React.PureComponent<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            values: new Array(props.dice).fill(1),
            rollingPlaceHolder: null,
        };
    }

    roll() {
        this.setState(state => ({
            rollingPlaceHolder: '',
            values: state.values.map(x => Math.floor(6 * Math.random()) + 1),
        }));
        wait(100)
            .then(() => this.setState({ rollingPlaceHolder: '•' }))
            .then(() => wait(50))
            .then(() => this.setState({ rollingPlaceHolder: '••' }))
            .then(() => wait(50))
            .then(() => this.setState({ rollingPlaceHolder: '•••' }))
            .then(() => wait(50))
            .then(() => this.setState({ rollingPlaceHolder: null }));
    }

    render() {
        return (
            <Root onClick={() => this.roll()}>
                {typeof this.state.rollingPlaceHolder !== 'string' ? (
                    this.state.values.map((n, idx) => (
                        <Wrapper key={idx}>
                            <Dice value={n} />
                        </Wrapper>
                    ))
                ) : (
                    <span>{this.state.rollingPlaceHolder}</span>
                )}
            </Root>
        );
    }
}

export default DiceButton;
