import React, { Component } from 'react'
import ImgHeader from '../images/Moggy_et.png'

export class Header extends Component {
    render() {
        return (
            <header>
                <div id="banniere">
                    <img src={ImgHeader} alt="Bannière du Moggy"/>
                </div>
                <nav>
                    <ul id="mainMenu">
                        <li>Présentation</li>
                        <li>Restaurant</li>
                            <ul className="subMenu">
                                <li>Carte</li>
                                <li>Personnel</li>
                                <li>Réservation</li>
                                <li>Recrutement</li>
                            </ul>
                        <li>Mandats</li>
                        <li>Activités</li>
                        <li>Partenariats</li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default Header
