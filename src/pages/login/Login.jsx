import React, { useState } from 'react';
import axios from 'axios';
import '../login/styles.css';
import { useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const handleSignUpClick = () => {
        history.push('/signup');
    };

    const handleLoginClick = async () => {
        try {
            const response = await axios.post('http://localhost:8000/users', {
                email: email,
                password: password
            });
    
            // Verificar se o login foi bem-sucedido no backend
            if (response.data.success) {
                // Se o login for bem-sucedido, redirecione para a página principal
                history.push('/');
            } else {
                // Se o login não for bem-sucedido, mostrar uma mensagem de erro para o usuário
                console.error('Credenciais inválidas');
                // Ou você pode definir um estado para mostrar uma mensagem de erro na interface do usuário
            }
        } catch (error) {
            console.error('Erro ao fazer login:', error);
            // Mostrar uma mensagem de erro genérica para o usuário
        }
    };

    return (
        <div className='box'>
            <div className='left-box'>
                <h1 className='logo-login'>Vaarias</h1>
            </div>
            <div className='right-box'>
                <h2 className='welcome-text'>Bem vindo de volta!</h2>
                <input 
                    type="text" 
                    name="input_email" 
                    id="input_email" 
                    placeholder='Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input 
                    type="password" 
                    name="input_password" 
                    id="input_password" 
                    placeholder='Senha'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <div className='button-container'>
                    <button className='button' onClick={handleSignUpClick}>Cadastrar</button>
                    <button className='button' onClick={handleLoginClick}>Entrar</button>
                </div>
            </div>
        </div>
    );
};
