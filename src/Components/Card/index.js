import React from 'react';
import './card.css';
import Amei from './amei.png';
import Like from './like.png';
import Nivel from './nivel.png';

const Card = () => (
    <div className="card">
        <div className="cardHeader">
            <div className="container">
                <div className="avatar"></div>
            </div>
        </div>
        <div className="headerBackground">
        </div>
        <div className="infos">
            <div className="container">
                Titulo
                <div className="subTitulo">Sub Titulo</div>
                <div className="reactions">
                    <img src={Amei} />
                    <img id="like" src={Like} />
                    <img id="nivel" src={Nivel} />
                </div>
            </div>
        </div>
    </div>
);

export default Card;