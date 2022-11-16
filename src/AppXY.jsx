import React from 'react';
import { useState } from 'react';
import './AppXY.css';

export default function AppXY() {
    const [position, setPosition] = useState({ x: 0, y: 0, z: 0 });
    const handleMove = e => {
        // setPosition({ x: e.clientX, y: e.clientY });
        // 만약 수평으로만 움직이고 싶다면?
        // setPosition(prev => ({ x: e.clientX, y: prev.y }));
        // 만일 positon에 여러 값들이 있는데 x값만 바꾸고 싶다면?
        setPosition(prev => ({ ...prev, x: e.clientX }));
    };
    return (
        <div className="container" onPointerMove={handleMove}>
            <div
                className="pointer"
                style={{
                    transform: `translate(${position.x}px, ${position.y}px)`,
                }}
            ></div>
        </div>
    );
}
