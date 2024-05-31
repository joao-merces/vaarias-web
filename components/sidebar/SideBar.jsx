import React from 'react';
import '../sidebar/styles.css';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

export const SideBar = () => {
    return (
        <div className="sidebar">
            <ul>
                <div className='logo-container'>
                    <Link to='/' className='logo'>Vaarias</Link>
                </div>
                <button className='sidebar-btn'>Botao A</button>
                <button className='sidebar-btn'>Botao B</button>
                <button className='sidebar-btn'>Botao C</button>
                <button className='sidebar-btn'>Botao D</button>
            </ul>
        </div>
    );
}

export default SideBar;
