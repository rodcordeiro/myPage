import React from 'react';
import './style.css';

export default function Projetos(){
    return (
        <div id="container">
           <div className="projetos">
               <header>
                    <h1>Projetos</h1>
                    <a href='/'>Home</a>
               </header>
               <hr />

                <div className="card">
                    <img src="https://rodcordeiro.github.io/shares/img/avatar.png" />
                    <div className="desc">
                        <h3>Projeto</h3>
                        <p>
                            Descrição
                        </p>
                    </div>
                </div>

           </div>
        </div>
    );
};