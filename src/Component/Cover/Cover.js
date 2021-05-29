import React from 'react';
import './Cover.css'
import cover from '../Images/cover1.png'
const Cover = () => {
    return (
        <div>
            <img src={cover} class="img-fluid cover" alt="Responsive image"/>
            <div class="centered">
                <h1 style={{color: 'green'}}>Hotel Bookers</h1>
                <h4>A great choice for you,
                    Book your hotel immediately
                </h4>
            </div>
        </div>
    );
};

export default Cover;