import React from 'react';
import { Link } from 'react-router-dom';

import './style.css'

export default function Header(){

    return (
        <header className="headerContainer">
			<img src="https://rodcordeiro.github.io/shares/img/RC.png" alt="logo" />
            <Link to="/">
                <span>Rod Cordeiro</span>
            </Link>
			
            <nav>
                <ul>
                    <li>Blog</li>
                    <li>Projects</li>
                </ul>    
            </nav>
		</header>
    )
}
