import React from 'react';
import './header.css'
import CardPrincipal from '../CardPrincipal';
import Avatar from "../Avatar";

const Header = () => (
    <header>
        <div className="avatarContainer">
            <div className="content">
                <Avatar />
            </div>
        </div>
        <div className="infoTexts">
            <div className="container">
                <div className="title">Social M</div>
                <div className="sub">Is the beginning of an academic creation for a final project.</div>
            </div>
        </div>
        <CardPrincipal />
    </header>
);

export default Header;