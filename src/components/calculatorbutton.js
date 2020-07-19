import React from 'react'

export default function CalculatorButton(props) {

    return (
        <button
            className={`button ${props.className}`}
            onClick={() => props.onClick(props.number)}
        >
            {props.number}
        </button>
    )
}