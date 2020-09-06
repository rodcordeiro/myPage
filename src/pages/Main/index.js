import React,{ useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { SiWhatsapp, SiGmail, SiLinkedin, SiGithub, SiSkype } from "react-icons/si";
import calculaIdade from '../../utils/calcAge';

import './style.css';

export default function MainPage(){
    const [idade, setIdade] = useState("Calculando..");

    var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    function type() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        setIdade(calculaIdade);
    };


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
                        <span>(11) 9 6918-7148</span>
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
