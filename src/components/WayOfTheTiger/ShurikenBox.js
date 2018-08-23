// @flow
import * as React from 'react';
import styled from 'styled-components';
import { phoneMedia } from './common';

const Root = styled.div`
    border: 1px solid black;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    width: 100%;
    overflow: hidden;

    @media ${phoneMedia} {
    }
`;

const ShurikenShape = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path d="M256 218.074c-26.139 0-47.407 21.268-47.407 47.407 0 26.139 21.268 47.407 47.407 47.407 26.139 0 47.407-21.268 47.407-47.407 0-26.139-21.268-47.407-47.407-47.407zm0 75.851c-15.685 0-28.444-12.759-28.444-28.444 0-15.685 12.759-28.444 28.444-28.444s28.444 12.759 28.444 28.444c0 15.685-12.759 28.444-28.444 28.444z" />
        <path d="M511.568 471.243L464.161 319.54c-.695-2.218-1.631-4.106-3.621-5.301l-89.663-54.129v-58.375L482.752 14.362c2.023-3.375 1.479-7.648-.951-10.741-2.445-3.097-6.669-4.357-10.419-3.19L319.61 47.839c-2 .625-3.771 1.836-4.974 3.554l-63.571 90.705h-58.888L14.233 39.143c-3.379-1.963-7.616-1.623-10.671.827C.511 42.414-.734 46.491.432 50.222l47.407 151.71c.694 2.217 2.73 4.111 4.721 5.306l90.762 54.133v77.161L40 497.364c-2.116 3.268-2.294 7.5-.03 10.667 1.806 2.528 4.561 3.968 7.575 3.968.765 0 1.469-.092 2.233-.282l151.668-37.926c2.44-.611 4.52-2.229 5.811-4.382l54.113-90.274h58.453l177.943 103.08c3.375 1.957 7.616 1.678 10.671-.766 3.052-2.445 4.297-6.474 3.131-10.206zM327.12 361.511c-1.444-.838-3.083-1.34-4.75-1.34H256c-3.329 0-6.417 1.808-8.13 4.663L193 456.314l-124.573 31.16 91.785-140.997c.995-1.537 2.073-3.316 2.073-5.145V256c0-3.329-2.295-6.417-5.151-8.129l-91.997-55.032L25.925 67.806l159.023 92.04c1.444.838 3.015 1.215 4.682 1.215H256c3.093 0 5.995-1.447 7.769-3.984l64.513-92.136 124.846-38.997-100.412 168.279c-.884 1.477-.802 3.17-.802 4.888v66.37c0 3.329 1.196 6.417 4.052 8.13l91.446 55.032 38.937 125-159.229-92.132z" />
    </svg>
);

const ShurikenWrapper = styled.div`
    width: 40px;
    height: 40px;
    flex-shrink: 0;
`;

const Shuriken = props => (
    <ShurikenWrapper {...props}>
        <ShurikenShape />
    </ShurikenWrapper>
);

type Props = {
    count: number,
    onChange?: number => mixed,
};

function seq(n) {
    const arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(i);
    }
    return arr;
}

const wrapEvent = cb => e => {
    e.stopPropagation();
    cb();
};

const ShurikenBox = ({ count, onChange }: Props) => (
    <Root onClick={wrapEvent(() => onChange && onChange(count + 1))}>
        {seq(count).map(idx => (
            <Shuriken key={idx} onClick={wrapEvent(() => onChange && onChange(count - 1))} />
        ))}
        <ShurikenWrapper />
    </Root>
);

export default ShurikenBox;
