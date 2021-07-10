import React from "react";
import Menu from '../../components/Menu'
import Footer from '../../components/Footer'
import { Parallax, Background } from "react-parallax";

import './styles.css'

const image = "https://images.unsplash.com/photo-1440186347098-386b7459ad6b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGhpa2luZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";

const Why = () => (

  <div>
    <Menu />
    <Parallax bgImage={image} strength={400}>
      <div className="background" style={{ height: 480 }}>

        <div className="grid">
          <div id="item-1">
            <h1>Quais benefícios ?</h1>
            <p>De acordo com pesquisas científicas, caminhar em contato com a natureza melhora
              os níveis de depressão e o estresse, e está relacionado com uma melhor saúde mental, e maior positividade.
            </p>
          </div>
          <div id="item-2">
            <h1>Porque começar ?</h1>
            <p>Interagir com a natureza dá descanso ao cérebro da superestimulação a que ele é submetido todos os dias, o que pode ter um efeito reparador nos níveis de atenção.</p>
          </div>
          <div id="item-3"><h1>Hiking x Trekking</h1>
            <p>
              Hiking: percursos curtos, indo e voltando no mesmo dia.<br></br>
              Trekking: percursos longos ou travessias, com pernoite no caminho.</p>
          </div>
          <div id="item-4"><h1>Terapia da floresta ?</h1>
            <p>"Shinrin-yoku": o banho de "floresta" terapêutico japonês.
              A técnica de visitar bosques e florestas possui benefícios medicinais, como redução da ansiedade e fortalecimento da imunidade.</p>
          </div>
        </div>
      </div>
    </Parallax>

    <Footer />
  </div>
);


export default Why