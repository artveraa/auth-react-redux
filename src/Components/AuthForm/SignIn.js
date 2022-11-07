import React, {useRef, useState} from 'react'
import './AuthForm.css'
import {useDispatch, useSelector} from "react-redux";

export default function SignIn() {

    const showModal = useSelector(state => state);

    const dispatch = useDispatch();

    const closeModal = () => {
        dispatch({
            type: 'CLOSEMODAL',
        })
    }

    return (
        <div className={showModal.showSignIn ? "global-modal" : "hide-modal"}>
            <div className='overlay' onClick={closeModal}></div>

            <div className="container-modal">
                <form className='form-auth'>
                    <h2>CONNEXION</h2>
                    <label htmlFor="mail">Votre mail</label>
                    <input type="email" name="mail" htmlFor="mail" required/>

                    <label htmlFor="password">Votre mot de passe</label>
                    <input type="password" name="password" htmlFor="password" required/>

                    <button className='btn-sign'>Se connecter</button>
                </form>
                <button className='btn-close' onClick={closeModal}>X</button>
                <p className='bottom-help-txt'>Besoin de créer un compte ?</p>
            </div>

        </div>
    )
}