import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../login/styles.css';
import { useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [users, setUsers] = useState([]);
    const history = useHistory();

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await axios.get('http://localhost:8000/users');
            setUsers(response.data);
        } catch (error) {
            console.error('Erro ao obter usuários:', error);
        }
    };

    const handleSignUpClick = () => {
        history.push('/signup');
    };

    const handleLoginClick = () => {
        const user = users.find(user => user.email === email && user.password === password);
        if (user) {
            console.log('Login bem-sucedido');
            history.push('/');
        } else {
            console.error('Credenciais inválidas');
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
                    className='input'
                />
                <input 
                    type="password" 
                    name="input_password" 
                    id="input_password" 
                    placeholder='Senha'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className='input'
                />
                <div className='button-container'>
                    <button className='button' onClick={handleSignUpClick}>Cadastrar</button>
                    <button className='button' onClick={handleLoginClick}>Entrar</button>
                </div>
            </div>
        </div>
    );
};
