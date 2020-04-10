import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn, FiHome } from 'react-icons/fi';
import './style.css';

export default function Projetos(){
    const projetos =[
        {
            id:1,
            title:"Aurebesh Translator",
            description: "Um app para transcrever o que foi dito para aurebesh.",
            link:"https://rodcordeiro.github.io/Projects/Aurebesh/",
            img:"https://rodcordeiro.github.io/Projects/Aurebesh/Arquivos/SithEmblemTOR.png"
        },
        {
            id:2,
            title:"Daedric Translator",
            description: "Um app para transcrever o que foi dito para Daedric.",
            link:"https://rodcordeiro.github.io/Projects/Daedric/",
            img:"https://rodcordeiro.github.io/Projects/Daedric/Arquivos/skyrim-icon-41570.png"
        },
        {
            id:3,
            title:"Be the hero!",
            description: "Projeto voltado para ongs que poderão cadastrar casos para quem tiver interesse em ajudar.",
            link:"http://cordeiro-bethehero-frontend.herokuapp.com/",
            img:"https://rodcordeiro.github.io/shares/img/heroes.png"
        },
        {
            id:4,
            title:"Rock & Burger",
            description: "Projeto voltado para ongs que poderão cadastrar casos para quem tiver interesse em ajudar.",
            link:"https://rodcordeiro.github.io/Projects/Rock&Burguer/index.html",
            img:"https://rodcordeiro.github.io/Projects/Rock&Burguer/images/logo_oficial-u970.png"
        }
    ]
    
    return (
        <div className="projectContent">
           <div className="projetos">
               <header>
                    <h1>Projetos</h1>
                    <Link 
                        to={'/'}
                        className="homeButton"
                        // onClick={showHome}
                    >
                        <FiHome />
                    </Link>
               </header>
               <hr />
                {projetos.map(projeto => (
                    <div className="card">
                    <img alt="Img do projeto" src={projeto.img} />
                    <div className="desc">
                        <h3>{projeto.title}</h3>
                        <p>
                        {projeto.description}
                        <br />
                        
                        <a 
                            href={projeto.link}
                            className='link'
                            target="_blank"
                        >
                            Veja mais 
                            <FiLogIn className="link_icon"/>
                        </a>
                        </p>
                    </div>
                </div>
                ))};
               
        
            
           </div>
        </div>
    );
};