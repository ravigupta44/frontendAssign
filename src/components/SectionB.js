import React, { useState } from 'react';
import '../style/SectionB.css';

function SectionB() {
    return (
        <div className="sectionB">
            <EvenOrOddChecker />
            <NumberGuessing />
            <FruitDisplay />
        </div>
    );
}

function EvenOrOddChecker() {
    const [number, setNumber] = useState(null);
    const [message, setMessage] = useState('');

    const checkEvenOrOdd = () => {
        setMessage(number % 2 === 0 ? 'Even' : 'Odd');
    };

    return (
        <div className="taskOne">
            <text className="taskOne-heading">Even/Odd checker</text>
            <input type="number" onChange={(e) => setNumber(e.target.value)} placeholder="Enter a number..." />
            <button className="taskOne-submit" onClick={checkEvenOrOdd}>Check</button>
            <p className="taskOne-result">{message}</p>
        </div>
    );
}

function NumberGuessing() {
    const [guess, setGuess] = useState('');
    const [feedback, setFeedback] = useState('');
    const [tries, setTries] = useState(3);
    const randomNumber = useState(Math.floor(Math.random() * 10) + 1)[0];

    const handleGuess = () => {
        if (parseInt(guess) === randomNumber) {
            setFeedback('Correct!');
        } else if (parseInt(guess) < randomNumber) {
            setFeedback('Too low!');
        } else {
            setFeedback('Too high!');
        }
        setTries(tries - 1);
        if (tries === 1) {
            setFeedback(`Out of tries! The number was ${randomNumber}`);
        }
    };

    return (
        <div className="taskOne">
            <text className="taskOne-heading">Predict the number</text>
            <input type="number" value={guess} onChange={(e) => setGuess(e.target.value)} placeholder="Guess a number (1-10)" />
            <button className="taskOne-submit" onClick={handleGuess}>Guess</button>
            <p className="taskTwo-result">{feedback}</p>
        </div>
    );
}

function FruitDisplay() {
    const fruits = ['Apple', 'Banana', 'Cherry', 'Date'];
    const [show, setShow] = useState(false);

    return (
        <div className="taskThree">
            <text className="taskOne-heading">Your Favorite Fruits</text>
            <button className="taskOne-submit" onClick={() => setShow(!show)}>Show Fruits</button>
            {show && (
                <ol className="taskThree-result">
                    {fruits.map((fruit) => (
                        <li key={fruit}>{fruit}</li>
                    ))}
                </ol>
            )}
        </div>
    );
}

export default SectionB;



