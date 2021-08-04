import React from 'react';

import Header from '../../components/header'

import './style.css';

export default function MainPage(){
    return (
        <div onLoad={type} className="mainContent">
            <img src="https://rodcordeiro.github.io/shares/img/eu.jpg" alt="Minha foto" />

            <div id="data">
                <h2>
                    Rodrigo Cordeiro
                </h2>
                <hr />
                <h3 className="typewrite" data-period="1300" data-type='[ "WebDeveloper", "FullStack", "Tatuador", "Desenhista" ]'>
                    <span className="wrap"></span>
                </h3>

                <p >
                    Rodrigo de Mendonça Cordeiro, {idade} anos, nascido em São Paulo.
                    Amante da arte e dos rabiscos desde que me entendo por gente,
                    descobri a paixão por desenvolvimento nas aulas de desenvolvimento Web
                    do curso técnico em Comunicação Visual e desde então tenho me apaixonado cada vez mais por ver através da matrix.
                </p>
                <span id="alert">Este site ainda está em construção</span>
                <div id="contatos">
                <div className="contact"> 
                        <a href="mailto:rodrigomendoncca@gmail.com">
                            <SiGmail /> rodrigomendoncca@gmail.com
                            </a>
                        </div>
                        
                        <div className="contact"> 
                            <SiWhatsapp /> 
                            <span>(11) 9 8264-5275</span>
                        </div>
                        <div className="contact"> 
                            <SiSkype />
                            <span>RodrigoM.Cordeiro</span>
                        </div>
                        
                        <div className="contact"> 
                            <a href="https://www.linkedin.com/in/rodrigomcordeiro/">
                                <SiLinkedin /> /rodrigomcordeiro
                            </a>
                        </div>
                        <div className="contact">
                            <a href="https://github.com/rodcordeiro">
                                <SiGithub />
                                <span>/rodcordeiro</span>
                            </a>
                        </div>

                </div>
            </div>
        </div>
    );
}
