import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn, FiHome } from 'react-icons/fi';
import './style.css';

export default function Contact(){
    return (
        <div className="projectContent">
           <div className="projetos">
               <header>
                    <h1>Contato</h1>
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
               <p> Ainda em desenvolvimento, mas qualquer coisa manda e-mail para <a href="mailto:rodrigomendoncca@gmail.com?subject=Sobre%20seu%20portfolio">rodrigomendoncca@gmail.com</a></p>

 
            </div>
        </div>
    );
};
