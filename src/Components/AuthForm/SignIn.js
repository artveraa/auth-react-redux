import React, {useRef, useState, useContext} from 'react'
import './AuthForm.css'
import {useDispatch, useSelector} from "react-redux";
import {AuthContext} from "../../context/AuthContext";
import {useHistory} from "react-router-dom";

export default function SignIn() {

    const [error, setError] = useState('');
    const history = useHistory();
    const {login} = useContext(AuthContext);

    const showModal = useSelector(state => state);

    async function handleSubmit(e){
        e.preventDefault();
        try{
            await login(inputs.current[0].value, inputs.current[1].value);
            history.push('/loggedHome');
            closeModal();
        } catch (e) {
            setError('Impossible de se connecter');
        }
    }

    const dispatch = useDispatch();

    const toggleSignUp = () => {
        console.log('toggleSignUp');
        dispatch({
            type: 'TOGGLEUP',
        })
    }

    const closeModal = () => {
        dispatch({
            type: 'CLOSEMODAL',
        })
    }

    const inputs = useRef([]);

    const addInputs = (el) => {
        if(el && !inputs.current.includes(el)){
            inputs.current.push(el);
        }
    }

    return (
        <div className={showModal.showSignIn ? "global-modal" : "hide-modal"}>
            <div className='overlay' onClick={closeModal}></div>

            <div className="container-modal">
                <form className='form-auth' onSubmit={handleSubmit}>
                    <h2>CONNEXION</h2>
                    <label htmlFor="mail">Votre mail</label>
                    <input type="email" name="mail" ref={addInputs} htmlFor="mail" required/>

                    <label htmlFor="password">Votre mot de passe</label>
                    <input type="password" name="password" ref={addInputs} htmlFor="password" required/>
                    {error}
                    <button className='btn-sign'>Se connecter</button>
                </form>
                <button className='btn-close' onClick={closeModal}>X</button>
                <p className='bottom-help-txt' onClick={toggleSignUp}>Besoin de créer un compte ?</p>
            </div>

        </div>
    )
}