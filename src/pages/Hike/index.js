import React from "react";
import Menu from '../../components/Menu'
import Footer from '../../components/Footer'
import Img from "../../assets/plant.png"
import Guide from "../../assets/rodolfo.png"
import { Parallax, Background } from "react-parallax";

import './styles.css'

const image = "https://images.unsplash.com/photo-1476611338391-6f395a0ebc7b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80";

const image2 = "https://images.unsplash.com/photo-1543169564-be8896b30cdb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGhpa2luZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";

const image3 = "https://images.unsplash.com/photo-1557652696-0fd8a35b0d62?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njh8fGhpa2luZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"

const Hike = () => (

  <div>
    <Menu />
    <Parallax bgImage={image} strength={200}>
      <div style={{ height: 700 }}>
        <div className="card"><h3>Como começar ?</h3>
          <p id="text1">Existem muitas dúvidas sobre esse assunto. Aqui vai um manual basicão, em breve darei dicas mais precisas.</p>
          <ul className="points">
            <li><img className="bullet" src={Img} alt="Ilustração logo planta" />Tenha um tênis para poder se jogar na lama se necessário.</li>
            <li><img className="bullet" src={Img} alt="Ilustração logo planta" />Quando der, compre uma bota, tem marcas super caras, mas também tem com valores acessíveis.</li>
            <li><img className="bullet" src={Img} alt="Ilustração logo planta" />Prepare seu corpo fora da trilha também, fazendo exercícios e caminhando.</li>
            <li><img className="bullet" src={Img} alt="Ilustração logo planta" />Procure ter companhia.</li>
            <li><img className="bullet" src={Img} alt="Ilustração logo planta" />Peça ajuda para quem entende do assunto.</li>
          </ul>
        </div>
      </div>
    </Parallax>
    <h1><img src={Img} alt="Ilustração logo planta" /></h1>
    <Parallax bgImage={image2} strength={500}>
      <div style={{ height: 700 }}>
        <div className="card"><h3>Super indico esse guia:</h3><p> Rodolfo Guedes, mestre de Minas Gerais, conhece demais Paraty, Ilha Grande e Chapada dos Veadeiros. Também domina as trilhas da Argentina e do Chile. Além de guiar em trilhas, ensina escalada.</p>
          <img className="guide1" src={Guide} alt="Foto Rodolfo" />

        </div>

      </div>
    </Parallax>

    <h1><img src={Img} alt="Ilustração logo planta" /></h1>


    <Parallax
      bgImage={image3}
      strength={400}
      renderLayer={percentage => (
        <div className="magic"
          style={{
            position: 'absolute',
            background: `rgba(255, 135, 0, ${percentage * 0.5})`,
            borderRadius: '50%',
            left: '40%',
            top: '20%',
            width: percentage * 300,
            height: percentage * 300,
          }}
        />
      )}
    >
      <div style={{ height: 700 }}></div>
      <div className="justgo">
        <p id="go">Só vai! Em breve mais novidades \o/</p>
      </div>
    </Parallax>

    <Footer />
  </div>
);



export default Hike