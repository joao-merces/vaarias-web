import React from 'react'
import '../components/styles.css';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { FaUser } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import 'bootstrap/dist/css/bootstrap.min.css';

export const TopBar = () => {
    return (
        <div className='topbar'>
            <div className='logo-container'>
                <Link to='/home' className='logo'>Vaarias</Link>
            </div>
            <div className='search-container'>
                <input type="text" className='search' placeholder='Digite o nome de um livro'/>
                <button><CiSearch/></button>
            </div>
            <div className='user-container'>
                <Link to='/home' className='user-link'>
                    <FaUser className='user-ico'/>
                    <h2 className='user-name'>User</h2>
                </Link>
            </div>
        </div>
    )
}