import styled from "styled-components";

const Screen = styled.div`
    color: #fff;
    font-size: 50px;
    grid-column-end: span 4;
    margin: 50px 0 10px;
    overflow: hidden;
    padding: 10px;
    text-align: right;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

const CalculatorScreen = ({ value }) => (
    <Screen>
        {value}
    </Screen>
);

export default CalculatorScreen;