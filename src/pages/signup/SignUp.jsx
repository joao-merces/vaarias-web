import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../signup/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export const SignUp = () => {
    const history = useHistory();
    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        email: '',
        password: '',
        phone: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async () => {
        try {
            const response = await fetch('http://localhost:8000/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id: null,
                    name: formData.name,
                    surname: formData.surname,
                    email: formData.email,
                    password: formData.password,
                    phone: formData.phone
                })
            });

            if (response.ok) {
                // Registro bem-sucedido, redirecione para a página de login
                history.push('/login');
            } else {
                // Lidar com erro de solicitação
                console.error('Erro ao cadastrar usuário');
            }
        } catch (error) {
            // Lidar com erros de rede
            console.error('Erro de rede:', error);
        }
    };

    return (
        <div className='box'>
            <div className='left-box'>
                <h1 className='logo-login'>Vaarias</h1>
            </div>
            <div className='right-box'>
                <h2 className='welcome-text'>Cadastre-se!</h2>
                <div className='container-input-name'>
                    <input type="text" className='input-name' name="name" value={formData.name} onChange={handleChange} placeholder='Nome'/>
                    <input type="text" className='input-name' name="surname" value={formData.surname} onChange={handleChange} placeholder='Sobrenome'/>
                </div>
                <input type="text" name="phone" className="input" value={formData.phone} onChange={handleChange} placeholder='Telefone'/>
                <input type="text" name="email" className="input" value={formData.email} onChange={handleChange} placeholder='Email'/>
                <input type="password" name="password" className="input" value={formData.password} onChange={handleChange} placeholder='Senha'/>
                <div className='button-container'>
                    <button className='button' onClick={handleSubmit}>Cadastrar</button>
                    <button className='button' onClick={() => history.push('/login')}>Entrar</button>
                </div>
            </div>
        </div>
    )
}
