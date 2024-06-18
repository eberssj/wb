import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';

type obj = {
    nome?: string;
    rota?: any;
};

type props = {
    tema: string;
    botoes: obj[];
    seletorView: Function;
};

const BarraNavegacao: React.FC<props> = ({ tema, botoes }) => {
    
    useEffect(() => {
        let elems = document.querySelectorAll('.sidenav');
        M.Sidenav.init(elems);
    }, []);

    const gerarListaBotoes = () => {
        if (botoes.length <= 0) {
            return <></>;
        } else {
            return botoes.map((botao, index) =>
                <li key={index}><a href={botao.rota}>{botao.nome}</a></li>
            );
        }
    };

    const estilo = `${tema}`;
    
    return (
        <>
            <nav className={estilo}>
                <div className="nav-wrapper deep-purple lighten-2">
                    <a className="brand-logo">WB</a>
                    <a data-target="mobile-menu" className="sidenav-trigger">
                        <i className="material-icons">menu</i>
                    </a>
                    <ul className="right hide-on-med-and-down">
                        {gerarListaBotoes()}
                    </ul>
                </div>
            </nav>
            <ul className="sidenav" id="mobile-menu">
                {gerarListaBotoes()}
            </ul>
        </>
    );
};

export default BarraNavegacao;
