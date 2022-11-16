import React from 'react';

export default function AppCard() {
    return (
        <div>
            <Card>
                <h1>카드1</h1>
                <p>컴포넌트 재사용</p>
            </Card>

            <Card>
                <h2>카드2</h2>
                <p>컴포넌트 재사용2</p>
            </Card>
        </div>
    );
}

function Card({ children }) {
    return (
        <div
            style={{
                backgroundColor: 'black',
                width: '200px',
                height: '200px',
                borderRadius: '10%',
                color: 'white',
            }}
        >
            {children}
        </div>
    );
}
