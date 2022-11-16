import React from 'react';
import styled, { css } from 'styled-components';

const Container = styled.div`
    display: flex;
`;

const Button = styled.button`
    background: blue;
    border-radius: 3px;
    boder: 2px solid black;
    padding: 20px;
    ${props =>
        props.primary &&
        css`
            background: red;
            color: white;
        `};
`;
export default function StyledComponents() {
    return (
        <Container>
            <Button>nomal Button</Button>
            <Button primary>Primary Button</Button>
        </Container>
    );
}
