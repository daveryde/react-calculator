import React, { useState } from 'react';

import CalculatorInternal from './CalculatorInternal';

import styled from 'styled-components';

import {
    clickAllClear,
    clickEqual,
    clickNumber,
    clickOperation,
    clickPercentage,
    clickSquared,
    initialState
} from '../actions/operations';

const CalculatorWrapper = styled.div`
    width: 230px;
    height: auto;
    background: linear-gradient(to right, #171a58, #454c7d);
    border-color: #d3d3d3;
    border-radius: 20px;
    border-style: none;
    color: white;
    display: inline-block;
    margin: 60px auto;
    padding: 20px;
`;

const Calculator = () => {
    const [entry, setEntry] = useState(initialState);

    const handleNumberClick = (value) => {
        setEntry(clickNumber(value, entry));
    }

    const handleClearAll = () => {
        setEntry(clickAllClear);
    }

    const handleOperation = (operation) => {
        setEntry(clickOperation(operation, entry));
    }

    const handlePercentage = () => {
        setEntry(clickPercentage);
    }

    const handleSquared = () => {
        setEntry(clickSquared);
    }

    const handleEqual = () => {
        setEntry(clickEqual);
    }

    return (
        <CalculatorWrapper>
            <CalculatorInternal
                entry={entry}
                handleNumberClick={handleNumberClick}
                handleClearAll={handleClearAll}
                handleOperation={handleOperation}
                handlePercentage={handlePercentage}
                handleSquared={handleSquared}
                handleEqual={handleEqual}
            />
        </CalculatorWrapper>
    )
}

export default Calculator;
