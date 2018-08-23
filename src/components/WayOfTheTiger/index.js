// @flow
import * as React from 'react';

import Layout from './Layout';

type State = {|
    punchModifier: string,
    kickModifier: string,
    throwModifier: string,
    fateModifier: string,
    innerForce: string,
    endurance: string,
    shuriken: number,
    ninjaTools: [string, boolean][],
    notes: string,
    specialItems: string,
    encounters: { name: string, endurance: string }[],
|};

type Bookmark = {
    section: string,
    time: string,
};

type Props = {
    bookmarks: Bookmark[],
    addBookmark: State => mixed,
    gotoBookmark: number => ?State,
};

function updateArray<T>(arr: T[], idx: number, data: T): T[] {
    return [...arr.slice(0, idx), data, ...arr.slice(idx + 1, arr.length)];
}

function numbersOnly(s: string) {
    return s.replace(/[^0-9-]/, '');
}

class WayOfTheTiger extends React.PureComponent<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            punchModifier: '0',
            kickModifier: '0',
            throwModifier: '0',
            fateModifier: '0',
            innerForce: '5',
            endurance: '20',
            shuriken: 5,
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
            notes: '',
            specialItems: '',
            encounters: [{ name: '', endurance: '' }],
        };
    }

    addEncounter() {
        this.setState(state => ({
            encounters: state.encounters.slice().concat({ name: '', endurance: '' }),
        }));
    }

    gotoBookmark(idx: number) {
        const state = this.props.gotoBookmark(idx);
        if (state) {
            this.setState(state);
        }
    }

    addBookmark() {
        this.props.addBookmark(this.state);
    }

    render() {
        return (
            <Layout
                {...this.state}
                bookmarks={this.props.bookmarks}
                onBookmarkClick={idx => this.gotoBookmark(idx)}
                addBookmark={() => this.addBookmark()}
                onPunchModifierChange={v => this.setState({ punchModifier: v })}
                onKickModifierChange={v => this.setState({ kickModifier: v })}
                onThrowModifierChange={v => this.setState({ throwModifier: v })}
                onFateModifierChange={v => this.setState({ fateModifier: v })}
                onInnerForceChange={v => this.setState({ innerForce: v })}
                onEnduranceChange={v => this.setState({ endurance: v })}
                onShurikenChange={v => this.setState({ shuriken: v })}
                onNotesChange={s => this.setState({ notes: s })}
                onSpecialItemsChange={s => this.setState({ specialItems: s })}
                addEncounter={() => this.addEncounter()}
                onNinjaToolChange={(name, active, idx) =>
                    this.setState(state => ({
                        ninjaTools: updateArray(state.ninjaTools, idx, [name, active]),
                    }))
                }
                onEncounterChange={idx => ({ name, endurance }) =>
                    this.setState(state => ({
                        encounters: updateArray(state.encounters, idx, {
                            name,
                            endurance: numbersOnly(endurance),
                        }),
                    }))}
            />
        );
    }
}

export default WayOfTheTiger;
