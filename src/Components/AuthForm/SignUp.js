import React, {useRef, useState} from 'react'
import './AuthForm.css'
import {useDispatch, useSelector} from "react-redux";

export default function SignUp() {

    const showModal = useSelector(state => state);

    const dispatch = useDispatch();

    const closeModal = () => {
        dispatch({
            type: 'CLOSEMODAL',
        })
    }

    return (
        <div className={showModal.showSignUp ? "global-modal" : "hide-modal"}>
            <div onClick={closeModal} className='overlay'></div>

            <div className="container-modal">
                <form className='form-auth'>
                    <h2>INSCRIPTION</h2>
                    <label htmlFor="mail">Votre mail</label>
                    <input type="email" name="mail" htmlFor="mail" required/>

                    <label htmlFor="password">Votre mot de passe</label>
                    <input type="password" name="password" htmlFor="password" required/>

                    <label htmlFor="confirm-password">Confirmez le mot de passe</label>
                    <input type="password" name="confirm-password" id="confirm-password" required/>

                    <button className='btn-sign'>S'inscrire</button>
                </form>
                <button onClick={closeModal} className='btn-close'>X</button>
                <p className='bottom-help-txt'>Besoin de créer un compte ?</p>
            </div>

        </div>
    )
}