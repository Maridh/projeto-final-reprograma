import React from 'react'
import { Link } from 'react-router-dom'

import './styles.css'

const Menu = () => {
    return (
        <div className="itens">
            <ul className="menu">
                <li>
                    <Link className="link" to="/">Home</Link>
                </li>
                <li>
                    <Link className="link" to="/why">Porque?</Link>
                </li>
                <li>
                    <Link className="link" to="/how">Ideias</Link>
                </li>
                <li>
                    <Link className="link" to="/hike">Caminhe</Link>
                </li>
            </ul>

        </div>

    )
}

export default Menu