import React from 'react';
import Avartar from './Avartar';

export default function Profile({ image, name, title, isNew }) {
    return (
        <div className="profile">
            <Avartar image={image} isNew={isNew} />
            {/* <img className="photo" src={image} alt="avatar" />
            {isNew && <span className="new">New</span>} */}
            <h1>{name}</h1>
            <p>{title}</p>
        </div>
    );
}
