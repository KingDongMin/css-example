import React from 'react';
import Counter from './components/Counter';
import './App.css';
import { useState } from 'react';

export default function AppCounter() {
    const [count, setCount] = useState(0);
    const handleClick = () => setCount(prev => prev + 1);
    return (
        <div className="appCounter">
            <span>
                Total count : {count}
                {count < 10 ? `🤍` : '❤❣'}
            </span>
            <Counter total={count} onClick={handleClick}></Counter>
            <Counter total={count} onClick={handleClick}></Counter>
        </div>
    );
}
