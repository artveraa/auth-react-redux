import React, {useRef, useState, useContext} from 'react'
import './AuthForm.css'
import {useDispatch, useSelector, } from "react-redux";
import {AuthContext} from "../../context/AuthContext";
import {useHistory} from "react-router-dom";

export default function SignUp() {

    const [error, setError] = useState('');
    const history = useHistory();
    const {signup} = useContext(AuthContext);

    const showModal = useSelector(state => state);

    const dispatch = useDispatch();

    const closeModal = () => {
        dispatch({
            type: 'CLOSEMODAL',
        })
    }

    const inputs = useRef([]);

    async function handleSubmit(e){
        e.preventDefault();

        console.log('submit');

        if(inputs.current[1].value !== inputs.current[2].value){
            setError('Les mots de passe ne correspondent pas');
        }

        await signup(inputs.current[0].value, inputs.current[1].value);
        closeModal();
        history.push('/loggedHome');

        // inputs.current.forEach(input => {
        //     input.value = '';
        // })
        // setError('');
    }


    const addInputs = (el) => {
        if(el && !inputs.current.includes(el)){
            inputs.current.push(el);
        }
    }

    return (
        <div className={showModal.showSignUp ? "global-modal" : "hide-modal"}>
            <div onClick={closeModal} className='overlay'></div>

            <div className="container-modal">
                <form onSubmit={handleSubmit}  className='form-auth'>
                    <h2>INSCRIPTION</h2>
                    <label htmlFor="mail">Votre mail</label>
                    <input type="email" ref={addInputs} name="mail" htmlFor="mail" required/>

                    <label htmlFor="password">Votre mot de passe</label>
                    <input type="password" ref={addInputs} name="password" htmlFor="password" required/>

                    <label htmlFor="confirm-password">Confirmez le mot de passe</label>
                    <input type="password" ref={addInputs} name="confirm-password" id="confirm-password" required/>
                    {error}

                    <button className='btn-sign'>S'inscrire</button>
                </form>
                <button onClick={closeModal} className='btn-close'>X</button>
                <p className='bottom-help-txt'>Besoin de créer un compte ?</p>
            </div>

        </div>
    )
}