// @flow
import * as React from 'react';
import styled from 'styled-components';
import { phoneMedia, font } from './common';

const FaceOne = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 557 557">
        <rect
            x="4"
            y="4"
            width="549"
            height="549"
            rx="68"
            fill="none"
            stroke="#000"
            strokeWidth="7"
        />
        <circle fill="#000" stroke="#000" strokeWidth="5" cx="278" cy="278" r="57" />
    </svg>
);

const FaceTwo = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 557 557" overflow="visible">
        <circle
            cx="439.9746094"
            cy="439.9736328"
            r="57.1152344"
            fill="#000"
            stroke="#000"
            strokeWidth="5"
        />
        <circle
            cx="117.0258789"
            cy="117.0263672"
            r="57.1147461"
            fill="#000"
            stroke="#000"
            strokeWidth="5"
        />
        <path
            d="M553.5 485.5400391C553.5 522.9189453 522.9179688 553.5 485.5390625 553.5H71.4589844C34.0820312 553.5 3.5 522.9199219 3.5 485.5410156V71.4599609C3.5 34.0820312 34.0820312 3.5 71.4589844 3.5h414.0800781C522.9179688 3.5 553.5 34.0820312 553.5 71.4599609v414.0800782z"
            fill="none"
            stroke="#000"
            strokeWidth="7"
        />
    </svg>
);

const FaceThree = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 557 557" overflow="visible">
        <circle
            cx="439.9746094"
            cy="439.9736328"
            r="57.1152344"
            fill="#000"
            stroke="#000"
            strokeWidth="5"
        />
        <circle
            cx="117.0258789"
            cy="117.0263672"
            r="57.1147461"
            fill="#000"
            stroke="#000"
            strokeWidth="5"
        />
        <path
            d="M553.5 485.5400391C553.5 522.9189453 522.9179688 553.5 485.5390625 553.5H71.4589844C34.0820312 553.5 3.5 522.9199219 3.5 485.5410156V71.4599609C3.5 34.0820312 34.0820312 3.5 71.4589844 3.5h414.0800781C522.9179688 3.5 553.5 34.0820312 553.5 71.4599609v414.0800782z"
            fill="none"
            stroke="#000"
            strokeWidth="7"
        />
        <circle cx="278.5" cy="278.5" r="57.1152344" fill="#000" stroke="#000" strokeWidth="5" />
    </svg>
);

const FaceFour = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 557 557">
        <rect
            x="4"
            y="4"
            width="549"
            height="549"
            rx="68"
            fill="none"
            stroke="#000"
            strokeWidth="7"
        />
        <g strokeDasharray="0,323" strokeLinecap="round">
            <path stroke="#000" strokeWidth="120" d="M117 117v325m323-2V115" />
            <path stroke="#000" strokeWidth="110" d="M117 117v325m323-2V115" />
        </g>
    </svg>
);

const FaceFive = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 557 557">
        <rect
            x="4"
            y="4"
            width="549"
            height="549"
            rx="68"
            fill="none"
            stroke="#000"
            strokeWidth="7"
        />
        <g strokeDasharray="0,228.4" strokeLinecap="round">
            <path stroke="#000" strokeWidth="120" d="M440 440L115 115m2 325l325-325" />
            <path stroke="#000" strokeWidth="110" d="M440 440L115 115m2 325l325-325" />
        </g>
    </svg>
);

const FaceSix = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 557 557">
        <rect
            x="3.5"
            y="3.5"
            width="550"
            height="550"
            rx="70"
            fill="none"
            stroke="#000"
            strokeWidth="7"
        />
        <g stroke="#000" strokeWidth="119" strokeLinecap="round" strokeDasharray="0,159">
            <path d="M437 117H0m437 323H0" />
            <path d="M437 117H0m437 323H0" stroke="#000" strokeWidth="109" />
        </g>
    </svg>
);

const Root = styled.div``;

type Props = {
    value: number,
};

const Dice = ({ value }: Props) => {
    return (
        <Root>
            {value === 1 ? (
                <FaceOne />
            ) : value === 2 ? (
                <FaceTwo />
            ) : value === 3 ? (
                <FaceThree />
            ) : value === 4 ? (
                <FaceFour />
            ) : value === 5 ? (
                <FaceFive />
            ) : (
                <FaceSix />
            )}
        </Root>
    );
};

export default Dice;
