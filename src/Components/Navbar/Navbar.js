import React from "react";
import './Navbar.css';
import {useDispatch} from "react-redux";

export default function Navbar() {
    const dispatch = useDispatch();

    const toggleSignIn = () => {
        dispatch({
            type: 'TOGGLEIN'
        });
    }

    const toggleSignUp = () => {
        dispatch({
            type: 'TOGGLEUP'
        });
    }
    return (
        <div className="navbar">
            <button onClick={toggleSignIn}>Connexion</button>
            <button onClick={toggleSignUp}>Inscription</button>
        </div>
    )
}