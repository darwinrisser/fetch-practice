import React from 'react';
import './UserCard.css';

function UserCard(props) {
    return(
        <div className="card">
            <h1>{props.user.name}</h1>
            <p>{props.user.email}</p>
        </div>
        );
    }
export default UserCard;
