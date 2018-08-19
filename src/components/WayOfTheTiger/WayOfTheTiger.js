// @flow
import * as React from 'react';

import Layout from './Layout';

type LayoutProps = {|
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
    data: LayoutProps,
};

type State = {|
    ...LayoutProps,
    bookmarks: Bookmark[],
|};

type Props = {
    bookmarks: Bookmark[],
    saveBookmarks: (Bookmark[]) => mixed,
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
            bookmarks: props.bookmarks,
        };
    }

    addEncounter() {
        this.setState(state => ({
            encounters: state.encounters.slice().concat({ name: '', endurance: '' }),
        }));
    }

    addBookmark() {
        const section: ?string = prompt('Enter section to bookmark');
        if (typeof section === 'string') {
            const { bookmarks: _, ...data } = this.state;
            const time = new Date()
                .toISOString()
                .split('.')[0]
                .replace('T', ' ');

            this.setState(state => ({
                bookmarks: [
                    ...state.bookmarks,
                    { section, time, data: JSON.parse(JSON.stringify(data)) },
                ],
            }));
        }
    }

    gotoBookmark(bookmark: Bookmark) {
        if (confirm(`Really load bookmark to section ${bookmark.section}?`)) {
            this.setState(bookmark.data);
        }
    }

    componentDidUpdate(prevProps: Props, prevState: State) {
        if (prevState.bookmarks !== this.state.bookmarks) {
            this.props.saveBookmarks(this.state.bookmarks);
        }
    }

    render() {
        const { bookmarks, ...layoutProps } = this.state;
        return (
            <Layout
                {...layoutProps}
                bookmarks={(bookmarks: $FlowFixMe)}
                onBookmarkClick={idx => this.gotoBookmark(this.state.bookmarks[idx])}
                onPunchModifierChange={v => this.setState({ punchModifier: numbersOnly(v) })}
                onKickModifierChange={v => this.setState({ kickModifier: numbersOnly(v) })}
                onThrowModifierChange={v => this.setState({ throwModifier: numbersOnly(v) })}
                onFateModifierChange={v => this.setState({ fateModifier: numbersOnly(v) })}
                onInnerForceChange={v => this.setState({ innerForce: numbersOnly(v) })}
                onEnduranceChange={v => this.setState({ endurance: numbersOnly(v) })}
                onShurikenChange={v => this.setState({ shuriken: v })}
                onNotesChange={s => this.setState({ notes: s })}
                onSpecialItemsChange={s => this.setState({ specialItems: s })}
                addBookmark={() => this.addBookmark()}
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
