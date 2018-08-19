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
import { phoneMedia, font } from './common';

const Root = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: auto auto auto 1fr;
    grid-template-areas:
        'heading heading heading heading heading heading enc enc enc enc enc enc'
        'combat combat combat combat shuriken shuriken enc enc enc enc enc enc'
        'combat combat combat combat tools tools enc enc enc enc enc enc'
        'notes notes notes items items items enc enc enc enc enc enc';

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
`;

const Heading = styled.h1`
    font: ${font}
    font-size: 20px;
`;

const SubHeading = styled.h2`
    font: ${font};
    text-decoration: uppercase;
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
`;

const CombatRatingWrapper = styled.div`
    grid-area: combat;
    margin: 0 12px 12px 0px;

    & > div:not(:last-child) {
        margin-bottom: 6px;
    }
`;
const ShurikenWrapper = styled.div`
    grid-area: shuriken;
    margin: 0 12px 12px 0px;
`;
const NinjaToolsWrapper = styled.div`
    grid-area: tools;
    margin: 0 12px 12px 0px;
`;
const NotesWrapper = styled.div`
    grid-area: notes;
    margin: 0 12px 12px 0px;
`;
const SpecialItemsWrapper = styled.div`
    grid-area: items;
    margin: 0 12px 12px 0px;
`;
const EncounterWrapper = styled.div`
    grid-area: enc;
    margin: 0 0px 12px 12px;

    @media screen and (max-width: 900px) {
        margin: 0 6px 12px 6px;
    }
`;

const BookmarkWrapper = styled.div`
    grid-area: bookmark;
    margin: 0 0px 12px 12px;

    @media screen and (max-width: 900px) {
        margin: 0 6px 12px 6px;
    }
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
