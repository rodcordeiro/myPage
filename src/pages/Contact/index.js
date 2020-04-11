import React from 'react';

import { Link } from 'react-router-dom';
import { FiHome } from 'react-icons/fi';
import {  FaWhatsapp, FaMailBulk, FaLinkedinIn, FaTelegramPlane, FaDiscord, FaGithub, FaSkype, FaAddressCard } from 'react-icons/fa';

import './style.css';

export default function Contact(){
    return (
        <div className="contactContent">
           <div className="contacts">
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
               <div className="contact-data">
               
                    <div className="contact"> 
                       <a href="mailto:rodrigomendoncca@gmail.com">
                           <FaMailBulk /> rodrigomendoncca@gmail.com
                        </a>
                    </div>
                    
                    <div className="contact"> <FaWhatsapp /> (11) 9 6918-7148 </div>
                    
                    <div className="contact"><FaTelegramPlane /> 
                        @RodCordeiro
                    </div>
                    
                    <div className="contact">
                        <FaDiscord /> @RodCordeiro#2122 
                    </div>
                    
                    <div className="contact"> <FaSkype /> RodrigoM.Cordeiro </div>
                    
                    <div className="contact"> 
                        <a href="https://www.linkedin.com/in/rodrigomcordeiro/">
                            <FaLinkedinIn /> /rodrigomcordeiro
                        </a>
                    </div>
                    
                    <div className="contact">
                        <a href="https://github.com/rodcordeiro">
                            <FaGithub /> /rodcordeiro
                        </a>
                    </div>

                    <div className="contact">
                         <a 
                         href="https://rodcordeiro.github.io/shares/files/rodrigo_cordeiro.vcf" 
                         download="https://rodcordeiro.github.io/shares/files/rodrigo_cordeiro.vcf"
                         >
                            <FaAddressCard /> Baixe o .vcard
                        </a>
                    </div>
                    

               </div>
            </div>
        </div>
    );
};
