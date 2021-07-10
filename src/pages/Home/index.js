import React from 'react'
import Menu from '../../components/Menu'
import Banner from '../../components/Banner'
import Footer from '../../components/Footer'

import './styles.css'

const Home = () => {
    return (
        <>
            <Menu />
            <Banner />
            <div className="main">
                <div className="cardhome" id="cardhome1">
                    <h1>Houston Expedições</h1>
                    <h2>Quem sou eu?</h2>
                    <p>Desenvolvedora front-end e caminhante nas horas vagas.</p>
                    <p>Sou apaixonada por natureza e sobretudo por fazer hikings e trekkings.</p>
                    <p>Hoje em dia tenho um grupo de Whatsapp para quem quer dicas e cia para trilhar por ai.</p>
                </div>

                <div className="cardhome" id="cardhome2">
                    <h1>Missão</h1>
                    <h3>Ser uma "agência" de trilhas e expedições bem diferente de tudo que você já viu.</h3>
                    <h2>Como?</h2>
                    <p>Facilitando as experiências de forma personalizada. Você fala o paradeiro, suas vontades e nós montamos todo o roteiro. Pode ser para lugares conhecidos ou que você nunca ouviu falar antes!
                    </p>
                </div>
            </div>

            <Footer />

        </>

    )
}

export default Home