import React from 'react';
import { Link } from 'react-router-dom';
import { FiBook, FiFileText, FiHash, FiHome, FiLayers } from 'react-icons/fi'

import './style.css'

export default function Header(){

    return (
        <header className="headerContainer">
			<Link to="/dashboard" className="link active">
            <img src="https://rodcordeiro.github.io/shares/img/me.png" alt="logo" />
            </Link>
            
            
            <nav >
                <ul className="navbar">
                    <Link to="/" className="link active">
                        <li> <FiHome /> Home</li>
                    </Link>
                    <Link to="/" className="link">
                        <li><FiLayers/> Experiência</li>
                    </Link>
                    <Link to="/" className="link">
                        <li><FiBook /> Educação</li>
                    </Link>
                    <Link to="/" className="link">
                        <li><FiHash /> Projetos</li>
                    </Link>
                    <Link to="/" className="link">
                        <li><FiFileText /> Blog</li>
                    </Link>
                </ul>    
            </nav>
		</header>
    )
}
