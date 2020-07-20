import React, { useState } from 'react';
import CalculatorButton from './calculatorbutton';
import KeyboardHandler from './keyboardhandler';

const VisibilityFilters = {
    PLUS: 'PLUS',
    MINUS: 'MINUS',
    DIVIDE: 'DIVIDE',
    MULTIPLY: 'MULTIPLY',
    NONE: 'NONE'
}

export default function Calculator() {
    const [previousInput, setPreviousInput] = useState("");
    const [currentInput, setCurrentInput] = useState("");
    const [currentOperation, setCurrentOperation] = useState(VisibilityFilters.NONE);

    function onNumberEntered(number) {
        setCurrentInput(currentInput => currentInput + number);
    }

    function onDivideClicked() {
        setCurrentOperation(VisibilityFilters.DIVIDE);
        advanceAfterOperation();
    }

    function onMultiplyClicked() {
        setCurrentOperation(VisibilityFilters.MULTIPLY);
        advanceAfterOperation();
    }

    function onMinusClicked() {
        setCurrentOperation(VisibilityFilters.MINUS);
        advanceAfterOperation();
    }

    function onPlusClicked() {
        setCurrentOperation(VisibilityFilters.PLUS);
        advanceAfterOperation();
    }

    function onEqualsClicked() {
        if (!previousInput || !currentInput) return;

        const previous = Number.parseFloat(previousInput);
        const current = Number.parseFloat(currentInput);

        var result;
        switch (currentOperation) {
            case VisibilityFilters.PLUS:
                result = previous + current;
                break;
            case VisibilityFilters.MINUS:
                result = previous - current;
                break;
            case VisibilityFilters.DIVIDE:
                result = previous / current;
                break;
            case VisibilityFilters.MULTIPLY:
                result = previous * current;
                break;
            default:
                throw `unsupported operation ${currentOperation}!`;
        }

        result = +result.toFixed(2);

        setCurrentInput(result.toString());
        setPreviousInput("");
    }

    function OnDecimalClicked() {
        if (currentInput.includes(".")) return;

        setCurrentInput(currentInput => currentInput + ".");
    }

    function onClearClicked() {
        setPreviousInput("");
        setCurrentInput("");
        setCurrentOperation(VisibilityFilters.NONE);
    }

    function advanceAfterOperation() {
        setPreviousInput(currentInput);
        setCurrentInput("");
    }

    return (
        <div className="calculator">
            <KeyboardHandler
                onClearClicked={onClearClicked}
                onPlusClicked={onPlusClicked}
                onMinusClicked={onMinusClicked}
                onMultiplyClicked={onMultiplyClicked}
                onDivideClicked={onDivideClicked}
                OnDecimalClicked={OnDecimalClicked}
                onEqualsClicked={onEqualsClicked}
                onNumberEntered={onNumberEntered}
            />
            <div className="display">{currentInput}</div>
            <CalculatorButton number="C" onClick={onClearClicked} />
            <CalculatorButton number="=" onClick={onEqualsClicked} />
            <CalculatorButton number="/" onClick={onDivideClicked} />
            <CalculatorButton number="*" onClick={onMultiplyClicked} />
            <CalculatorButton number="7" onClick={onNumberEntered} />
            <CalculatorButton number="8" onClick={onNumberEntered} />
            <CalculatorButton number="9" onClick={onNumberEntered} />
            <CalculatorButton number="-" onClick={onMinusClicked} />
            <CalculatorButton number="4" onClick={onNumberEntered} />
            <CalculatorButton number="5" onClick={onNumberEntered} />
            <CalculatorButton number="6" onClick={onNumberEntered} />
            <CalculatorButton number="+" onClick={onPlusClicked} />
            <CalculatorButton number="1" onClick={onNumberEntered} />
            <CalculatorButton number="2" onClick={onNumberEntered} />
            <CalculatorButton number="3" onClick={onNumberEntered} />
            <CalculatorButton number="=" onClick={onEqualsClicked} className="button-equals" />
            <CalculatorButton number="0" onClick={onNumberEntered} className="button-zero" />
            <CalculatorButton number="." onClick={OnDecimalClicked} />
        </div>
    );
}
