import CalculatorScreen from './CalculatorScreen';

import styled from "styled-components";

import { operationKeys } from '../actions/operations';

const buttonColors = {
    white: "#fff",
    orange: "#fd7d2c",
    deeppink: "#fc2c7a",
    crimson: "#fa2752",
}

const CalculatorBody = styled.div`
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: auto;
`;

const Button = styled.button.attrs(props => ({
    bgColor: props.bgColor
}))`
    background-color: ${props => props.bgColor ? props.bgColor : "transparent"};
    color: ${props => props.bgColor === buttonColors.white ? "red" : "white"};
    border-style: none;
    border-radius: 50%;
    font-size: 20px;
    padding: 12px;

    &:active {
        transform: translateY(2px);
        box-shadow: ${props => `0 0 40px 10px ${props.bgColor ? props.bgColor : '#fc2c7a'}`};
    }
`;

const BigButton = styled.button`
    grid-area: 6 / 5 / 8 / 4;
    background: linear-gradient(to bottom, ${buttonColors.deeppink}, ${buttonColors.crimson});
    border-style: none;
    border-radius: 25px;
    font-size: 20px;
    padding: 12px;

    &:active {
        transform: translateY(4px);
        box-shadow: 0 0 40px 10px ${buttonColors.deeppink};
    }
`;

const CalculatorInternal = ({
    entry,
    handleNumberClick,
    handleClearAll,
    handleOperation,
    handlePercentage,
    handleSquared,
    handleInverse,
    handleEqual
}) => (
    <CalculatorBody>
        <CalculatorScreen value={`${entry.memory !== "0" ? entry.memory : ""} ${entry.operation !== null ? entry.operation : ""} ${entry.input === "" ? "0" : entry.input} `} />
        <Button
            bgColor={buttonColors.white}
            value={operationKeys.C}
            onClick={handleClearAll}>
            {operationKeys.C}
        </Button>
        <Button
            bgColor={buttonColors.orange}
            value={operationKeys.PERCENT}
            onClick={handlePercentage}>
            {operationKeys.PERCENT}
        </Button>
        <Button
            bgColor={buttonColors.orange}
            value={operationKeys.SQUARE}
            onClick={handleSquared}>
            {operationKeys.SQUARE}
        </Button>
        <Button
            bgColor={buttonColors.orange}
            value={operationKeys.DIVIDE}
            onClick={(e) => handleOperation(e.target.value)}>
            {operationKeys.DIVIDE}
        </Button>
        <Button bgColor={buttonColors.orange} />
        <Button bgColor={buttonColors.orange} />
        <Button bgColor={buttonColors.orange} />
        <Button
            bgColor={buttonColors.orange}
            value={operationKeys.MULTIPLY}
            onClick={(e) => handleOperation(e.target.value)}>
            {operationKeys.MULTIPLY}
        </Button>
        <Button
            value={operationKeys.ONE}
            onClick={(e) => handleNumberClick(e.target.value)}>
            {operationKeys.ONE}
        </Button>
        <Button
            value={operationKeys.TWO}
            onClick={(e) => handleNumberClick(e.target.value)}>
            {operationKeys.TWO}
        </Button>
        <Button
            value={operationKeys.THREE}
            onClick={(e) => handleNumberClick(e.target.value)}>
            {operationKeys.THREE}
        </Button>
        <Button
            bgColor={buttonColors.orange}
            value={operationKeys.SUBTRACT}
            onClick={(e) => handleOperation(e.target.value)}>
            {operationKeys.SUBTRACT}
        </Button>
        <Button
            value={operationKeys.FOUR}
            onClick={(e) => handleNumberClick(e.target.value)}>
            {operationKeys.FOUR}
        </Button>
        <Button
            value={operationKeys.FIVE}
            onClick={(e) => handleNumberClick(e.target.value)}>
            {operationKeys.FIVE}
        </Button>
        <Button
            value={operationKeys.SIX}
            onClick={(e) => handleNumberClick(e.target.value)}>
            {operationKeys.SIX}
        </Button>
        <Button
            bgColor={buttonColors.orange}
            value={operationKeys.ADD}
            onClick={(e) => handleOperation(e.target.value)}>
            {operationKeys.ADD}
        </Button>
        <Button
            value={operationKeys.SEVEN}
            onClick={(e) => handleNumberClick(e.target.value)}>
            {operationKeys.SEVEN}
        </Button>
        <Button
            value={operationKeys.EIGHT}
            onClick={(e) => handleNumberClick(e.target.value)}>
            {operationKeys.EIGHT}
        </Button>
        <Button
            value={operationKeys.NINE}
            onClick={(e) => handleNumberClick(e.target.value)}>
            {operationKeys.NINE}
        </Button>

        <BigButton
            value={operationKeys.EQUAL}
            onClick={handleEqual}>
            {operationKeys.EQUAL}
        </BigButton>

        <Button
            value={operationKeys.INVERSE}
            onClick={() => handleInverse()}
        >
            {operationKeys.INVERSE}
        </Button>
        <Button
            value={operationKeys.DECIMAL}
            onClick={(e) => handleNumberClick(e.target.value)}>
            {operationKeys.DECIMAL}
        </Button>
        <Button
            value={operationKeys.ZERO}
            onClick={(e) => handleNumberClick(e.target.value)}>
            {operationKeys.ZERO}
        </Button>
    </CalculatorBody>
);

export default CalculatorInternal;