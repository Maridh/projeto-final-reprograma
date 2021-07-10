import React from 'react'
import Insta from '../../assets/insta.png'


import './styles.css'


const Footer = () => {
    return (
        <div>
            <ul className="footer">
                <li>
                    <a target="_blank"
                        rel="noreferrer" className="midias" href="https://www.linkedin.com/in/mariana-herreros/"> by Mariana Herreros <a />
                    </a>

                </li>
                <li>
                    <a target="_blank"
                        rel="noreferrer" className="midias" href="https://www.instagram.com/marianasherreros/" >
                        <img className="logo" src={Insta} alt="Logo Instagram" />
                    </a>
                </li>
            </ul>
        </div>

    )
}

export default Footer