import React, {useContext} from "react";
import SignIn from "../../Components/AuthForm/SignIn";
import SignUp from "../../Components/AuthForm/SignUp";
import Navbar from "../../Components/Navbar/Navbar";
import "../Home/Home.css";
import {AuthContext} from "../../context/AuthContext";

export default function PrivateHome() {

    const {logout} = useContext(AuthContext);

    return (
        <div className={'global-container'}>
            <Navbar />
            <SignUp />
            <SignIn />
            <div className="content-container">
                <h1>Bienvenue sur votre espace privé.</h1>
                <button onClick={logout}>Se déconnecter</button>
            </div>
        </div>
    )
}
