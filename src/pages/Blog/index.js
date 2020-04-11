import React from 'react';
import { Link } from 'react-router-dom';
import {  FiHome } from 'react-icons/fi';
import './style.css';

export default function Blog(){
    return (
        <div className="projectContent">
           <div className="projetos">
               <header>
                    <h1>Blog</h1>
                    <Link 
                        to={'/'}
                        className="homeButton"
                        // onClick={showHome}
                    >
                        <FiHome />
                    </Link>
                </header>
                <hr />
                <br />
                <p>
                    Aqui vai um pequeno blog
                </p>

 
            </div>
        </div>
    );
};
