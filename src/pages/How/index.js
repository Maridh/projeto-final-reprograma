import React, { useEffect, useState } from "react";
import Menu from '../../components/Menu'
import Footer from '../../components/Footer'

import './styles.css'

import Axios from 'axios'

const How = () => {
    const [trilha, setTrilha] = useState([])


    useEffect(() => {
        const pegaDados = async () => {
            const resposta = await Axios.get('https://my-json-server.typicode.com/Maridh/api-houston/posts')
            const dados = await resposta.data
            setTrilha(dados)
        }
        pegaDados()
    }, [])



    return (
        <>
            <Menu />
            <div className="grid2">
                {trilha.map(andar => {
                    return (
                        <div id="list1">
                            <ul id="list2">
                                <li><strong> Trilha: </strong>{andar.nome} </li>
                                <li><strong> Cidade: </strong> {andar.local} </li>
                                <li><strong> Anda quanto: </strong> {andar.km}</li>
                                <li><img className="picture" src={andar.foto} alt="Foto trilha" /></li>
                            </ul>
                        </div>

                    )
                })}
            </div>
            <Footer />

        </>

    )
}

export default How