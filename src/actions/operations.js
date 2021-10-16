export const initialState = {
    input: '0',
    memory: '0',
    operation: null,
}

export const clickAllClear = () => {
    return { ...initialState };
}

export const clickNumber = (number, previousState) => {
    const { input, memory, operation } = previousState;
    let newInput;

    if (number === '.') {
        newInput = input + number;
    }
    else if (operation == null || input !== memory) {
        newInput = String(parseFloat(input + number));
    }
    else {
        newInput = number;
    }

    return {
        ...previousState,
        input: newInput,
    };
}

export const clickOperation = (operation, previousState) => {
    return {
        input: "",
        memory: previousState.input,
        operation,
    };
}

export const clickPercentage = (previousState) => {
    const result = String(parseFloat(previousState.input) / 100);

    return {
        input: result,
        memory: initialState.memory,
        operation: initialState.operation,
    };
}

const calculate = (previousState) => {
    const { input, memory, operation } = previousState;

    const firstNumber = parseFloat(memory);
    const secondNumber = parseFloat(input);

    switch (operation) {
        case '+':
            return String(firstNumber + secondNumber);
        case '-':
            return String(firstNumber - secondNumber);
        case 'x':
            return String(firstNumber * secondNumber);
        case '/':
            return String(firstNumber / secondNumber);
        default:
            throw new Error('Operation not allowed');
    }
}

export const clickEqual = (previousState) => {
    const { input, memory } = previousState;

    if (input === initialState.input || memory === initialState.memory) {
        return {
            ...previousState
        }
    }

    const result = calculate(previousState);

    return {
        input: result,
        memory: initialState.memory,
        operation: initialState.operation,
    };
}

export const operationKeys = {
    C: "C",
    PERCENT: "%",
    MULTIPLY: "x",
    DIVIDE: "/",
    ADD: "+",
    SUBTRACT: "-",
    DECIMAL: ".",
    EQUAL: "=",
    ONE: "1",
    TWO: "2",
    THREE: "3",
    FOUR: "4",
    FIVE: "5",
    SIX: "6",
    SEVEN: "7",
    EIGHT: "8",
    NINE: "9",
    ZERO: "0"
}