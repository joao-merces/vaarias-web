import React, { useEffect, useState } from 'react';
import '../home/styles.css';
import { TopBar } from '../../components/topbar/TopBar';
import { SideBar } from '../../components/sidebar/SideBar';

export const Home = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            const url = 'http://localhost:8000/books';
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Erro ao carregar os dados da API');
            }
            const objJson = await response.json();
            setData(objJson);
        };
        fetchApi();
    }, []);

    return (
        <div className='main'>
            <div className='topbar'>
                <TopBar />
            </div>
            <div className='sidebar'>
                <SideBar/>
            </div>
            <div className='content'>
                {data.map(book => (
                    <div key={book.id} className="book">
                        <img src={book.cover} alt={book.title} className='book-cover' />
                        <h3>{book.title}</h3>
                        <p>{book.author}</p>
                        <h4>R$ {parseFloat(book.price).toFixed(2)}</h4>
                        <button className='button'>Comprar</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;
