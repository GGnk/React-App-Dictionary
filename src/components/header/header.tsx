import React from "react";
import './header.scss';

export const Header = () => {
    return (
        <header className='header'>
            <div className='left-text'>
                <h1>Word Keeper</h1>
            </div>
            <div className='right-text'>
                <h1>Starred Words</h1>
            </div>
        </header>
    );
}
