// @flow
import * as React from 'react';
import styled from 'styled-components';
import NumberBox from './NumberBox';
import ShurikenBox from './ShurikenBox';
import Notes from './Notes';
import Bookmark from './Bookmark';
import EncounterBox from './EncounterBox';
import ItemList from './ItemList';
import ToolList from './ToolList';
import DiceButton from './DiceButton';
import { phoneMedia, font } from './common';

const Root = styled.div`
    display: grid;
    grid-gap: 6px 12px;
    grid-template-columns: repeat(6, 1fr) 0px calc(50% - 12px);
    grid-template-rows: auto auto auto 1fr;
    grid-template-areas:
        'heading heading heading heading heading heading _ enc'
        'combat combat combat combat shuriken shuriken _ enc'
        'combat combat combat combat tools tools _ enc'
        'notes notes notes items items items _ enc';

    @media screen and (max-width: 900px) {
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
        grid-template-rows: auto;
        grid-template-areas:
            'heading heading heading heading heading heading'
            'combat combat combat combat shuriken shuriken'
            'combat combat combat combat tools tools'
            'notes notes notes items items items'
            'enc enc enc enc enc enc';
    }

    @media ${phoneMedia} {
        grid-template-columns: 1fr;
        grid-template-rows: auto;
        grid-row-gap: 20px;
        grid-template-areas:
            'heading'
            'combat'
            'shuriken'
            'tools'
            'notes'
            'items'
            'enc';
    }
`;

const Heading = styled.h1`
    font: ${font}
    font-size: 20px;
`;

const SubHeading = styled.h2`
    font: ${font};
    margin: 0;
`;

const Wrapper = styled.div`
    margin-bottom: 6px;
    &:last-child {
        maring-bottom: 0;
    }
`;

const HeadingWrapper = styled.div`
    grid-area: heading;
    @media ${phoneMedia} {
        margin-bottom: -16px;
    }
`;

const CombatRatingWrapper = styled.div`
    grid-area: combat;

    & > div:not(:last-child) {
        margin-bottom: 6px;
    }
`;
const ShurikenWrapper = styled.div`
    grid-area: shuriken;
`;
const NinjaToolsWrapper = styled.div`
    grid-area: tools;
`;
const NotesWrapper = styled.div`
    grid-area: notes;
`;
const SpecialItemsWrapper = styled.div`
    grid-area: items;
`;
const EncounterWrapper = styled.div`
    grid-area: enc;
`;

const BookmarkWrapper = styled.div`
    grid-area: bookmark;
`;

const DiceWrapper = styled.div`
    margin-top: 12px;
    display: flex;
    justify-content: space-around;
    max-width: 360px;
    margin: 12px auto;
`;

type Props = {|
    punchModifier: string,
    onPunchModifierChange: string => mixed,
    kickModifier: string,
    onKickModifierChange: string => mixed,
    throwModifier: string,
    onThrowModifierChange: string => mixed,
    fateModifier: string,
    onFateModifierChange: string => mixed,
    innerForce: string,
    onInnerForceChange: string => mixed,
    endurance: string,
    onEnduranceChange: string => mixed,
    shuriken: number,
    onShurikenChange: number => mixed,
    ninjaTools: [string, boolean][],
    onNinjaToolChange: (string, boolean, number) => mixed,
    notes: string,
    onNotesChange: string => mixed,
    specialItems: string,
    onSpecialItemsChange: string => mixed,
    encounters: { name: string, endurance: string }[],
    addEncounter: () => mixed,
    onEncounterChange: (idx: number) => ({ name: string, endurance: string }) => mixed,
    bookmarks: { section: string, time: string }[],
    addBookmark: () => mixed,
    onBookmarkClick: number => mixed,
|};

const WayOfTheTigerLayout = ({
    punchModifier,
    onPunchModifierChange,
    kickModifier,
    onKickModifierChange,
    throwModifier,
    onThrowModifierChange,
    fateModifier,
    onFateModifierChange,
    innerForce,
    onInnerForceChange,
    endurance,
    onEnduranceChange,
    shuriken,
    onShurikenChange,
    ninjaTools,
    onNinjaToolChange,
    notes,
    onNotesChange,
    specialItems,
    onSpecialItemsChange,
    encounters,
    addEncounter,
    onEncounterChange,
    bookmarks,
    addBookmark,
    onBookmarkClick,
}: Props) => (
    <Root>
        <HeadingWrapper>
            <Heading>Ninja Character Sheet</Heading>
        </HeadingWrapper>
        <CombatRatingWrapper>
            <SubHeading>Combat Ratings</SubHeading>
            <NumberBox name="Punch" value={punchModifier} onChange={onPunchModifierChange} />
            <NumberBox name="Kick" value={kickModifier} onChange={onKickModifierChange} />
            <NumberBox name="Throw" value={throwModifier} onChange={onThrowModifierChange} />
            <NumberBox name="Fate Modifier" value={fateModifier} onChange={onFateModifierChange} />
            <NumberBox name="Inner Force" value={innerForce} onChange={onInnerForceChange} />
            <NumberBox name="Endurance (20)" value={endurance} onChange={onEnduranceChange} />
        </CombatRatingWrapper>
        <ShurikenWrapper>
            <SubHeading>Shuriken</SubHeading>
            <ShurikenBox count={shuriken} onChange={onShurikenChange} />
        </ShurikenWrapper>
        <NinjaToolsWrapper>
            <SubHeading>Ninja Tools</SubHeading>
            <ToolList items={ninjaTools} onClick={onNinjaToolChange} />
        </NinjaToolsWrapper>
        <NotesWrapper>
            <SubHeading>Notes</SubHeading>
            <Notes value={notes} onChange={onNotesChange} />
        </NotesWrapper>
        <SpecialItemsWrapper>
            <SubHeading>Special Items</SubHeading>
            <Notes value={specialItems} onChange={onSpecialItemsChange} />
        </SpecialItemsWrapper>
        <EncounterWrapper>
            <Heading>Opponent Encounter Boxes</Heading>
            <ItemList
                items={encounters}
                template={(encounterProps, idx) => (
                    <EncounterBox {...encounterProps} onChange={onEncounterChange(idx)} />
                )}
                addItem={addEncounter}
                addItemText="Add encounter"
            />
            <DiceWrapper>
                <DiceButton dice={1} />
                <DiceButton dice={2} />
            </DiceWrapper>
            <Heading>Bookmarks</Heading>
            <ItemList
                items={bookmarks}
                template={(bookmarkProps, idx) => (
                    <Bookmark {...bookmarkProps} onClick={() => onBookmarkClick(idx)} />
                )}
                addItem={addBookmark}
                addItemText="Add bookmark"
            />
        </EncounterWrapper>
    </Root>
);

export default WayOfTheTigerLayout;
