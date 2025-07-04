import React, { useState } from 'react';
import './LotteryComponent.css';

function checkWinner(ticketNumber) {
    let sum = 0;
    while (ticketNumber > 0) {
        let digit = ticketNumber % 10;
        sum += digit;
        ticketNumber = Math.floor(ticketNumber / 10);
    }
    if (sum === 0) return { result: "Get your ticket", className: "neutral" };
    return sum === 15
        ? { result: "You Win!", className: "win" }
        : { result: "You Lose!", className: "lose" };
}

function LotteryComponent() {
    const [count, setCount] = useState(0);
    const {result, className } = checkWinner(count);

    return (
        <div className="lottery-container">
            <h1 className='heading'>Lottery</h1>
            
            <h1 className={className}>{result}</h1>
            <p>Current Lottery Number: {count}</p>
            <button onClick={() => setCount(Math.floor(Math.random() * 1000))}>
                Get New Ticket
            </button>
        </div>
    );
}

export default LotteryComponent;
