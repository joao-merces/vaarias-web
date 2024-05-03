import React from 'react'
import '../login/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Login = () => {
    return (
        <div className='box'>
            <div className='left-box'>
                <h1 className='logo-login'>Vaarias</h1>
            </div>
            <div className='right-box'>
                <h2 className='welcome-text'>Bem vindo de volta!</h2>
                <input type="text" name="input_email" id="input" placeholder='Email'/>
                <input type="password" name="input_password" id="input" placeholder='Senha'/>
                <div className='button-container'>
                    <button className='button'>Cadastrar</button>
                    <button className='button'>Entrar</button>
                </div>
            </div>
        </div>
    )
}