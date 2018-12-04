import React from 'react';
import "./style.css"

function NavBar(props) {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <a className="navbar-brand" href="/">Giphy Match</a>
            <div className="right-align align-items-center makeWide">
                <p className="navScore">Score: {props.correct} || High Score: {props.highScore}</p>
                <p className="navMessage" style={props.style}>{props.message + " "}</p>
            </div>
        </nav>
    )
}

export default NavBar;