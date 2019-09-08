import React from 'react';
import './cardPrincipal.css';

const CardPrincipal = () => (
    <div className="cardPrincipal">
        <div className="infos">        
            {new Date().toDateString()}
        </div>
    </div>
);


export default CardPrincipal;