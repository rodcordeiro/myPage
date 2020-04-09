import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
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
            title:"Projeto Teste",
            description: "Um projeto de teste",
            link:"/projetos",
            img:"https://rodcordeiro.github.io/shares/img/avatar.png"
        },
        {
            id:3,
            title:"Projeto Teste",
            description: "Um projeto de teste",
            link:"/projetos",
            img:"https://rodcordeiro.github.io/shares/img/avatar.png"
        }
    ]

    return (
        <div className="projectContent">
           <div className="projetos">
               <header>
                    <h1>Projetos</h1>
                    <a href='/'>Home</a>
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
                        <Link 
                            to={projeto.link}
                            className='plink'
                        >
                            Veja mais 
                            <FiLogIn />
                        </Link>
                        </p>
                    </div>
                </div>
                ))};
               
        
            
           </div>
        </div>
    );
};