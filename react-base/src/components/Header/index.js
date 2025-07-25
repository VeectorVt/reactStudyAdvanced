import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa'

import { Nav } from "./styled";
// Menu navigation do Header
// Importando os ícones do react-icons/fa
export default function Header() {
    return (

        <Nav>
            <Link to = "/">
                <FaHome size={24} />
            </Link>
            <Link to = "/login">
                <FaSignInAlt size={24} />
            </Link>
            <Link to = "/user">

                <FaUserAlt size={24} />
            </Link>

        </Nav>

    )
}
