import React from 'react'
import { useHistory } from 'react-router-dom';
import '../signup/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export const SignUp = () => {

    const history = useHistory();

    const handleEntrarClick = () => {
        history.push('/login');
    };

    return (
        <div className='box'>
            <div className='left-box'>
                <h1 className='logo-login'>Vaarias</h1>
            </div>
            <div className='right-box'>
                <h2 className='welcome-text'>Cadastre-se!</h2>
                <div className='container-input-name'>
                    <input type="text" id='input-name' placeholder='Nome'/>
                    <input type="text" id='input-name' placeholder='Sobrenome'/>
                </div>
                <input type="text" name="input_phone" id="input" placeholder='Telefone'/>
                <input type="text" name="input_email" id="input" placeholder='Email'/>
                <input type="password" name="input_password" id="input" placeholder='Senha'/>
                <div className='button-container'>
                    <button className='button'>Cadastrar</button>
                    <button className='button' onClick={handleEntrarClick}>Entrar</button>
                </div>
            </div>
        </div>
    )
}