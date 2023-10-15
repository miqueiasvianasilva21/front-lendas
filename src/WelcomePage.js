import React from "react";
import { useParams } from "react-router-dom";
import {Link} from "react-router-dom";
function WelcomePage() {
    const { nome } = useParams();

    return (
        <div>
            <ul>
            <Link to={`/create_legend/${nome}`}>Criar história</Link>
            <Link to={`/image`}>Imagem</Link>
                <li>Ver histórias</li>
            </ul>
            <h1>Bem-vindo, {nome}!</h1>
            <p>Seja bem-vindo à nossa plataforma.</p>
        </div>
    );
}

export default WelcomePage;
