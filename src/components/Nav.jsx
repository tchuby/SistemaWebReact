import React from "react";
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfo, faUser } from '@fortawesome/free-solid-svg-icons';
import './Nav.css';

export default function AppNav(){
    return(
        <aside className="menu-area">

            <Link to="/">
                <FontAwesomeIcon icon={faHome}></FontAwesomeIcon>
                Início
            </Link>

            <Link to="/About">
                <FontAwesomeIcon icon={faInfo}></FontAwesomeIcon>
                Sobre
            </Link>

            <Link to="/User">
                <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                Perfil
            </Link>

        </aside>
    )
}