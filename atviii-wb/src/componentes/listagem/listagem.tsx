import React, { useState, useEffect } from 'react';
import './listagem.css';

type Props = {
    id: string;
    tema: string;
};

interface Produto {
    id: string;
    nome: string;
    preco: number;
    genero: string;
}

interface Servico {
    id: string;
    nome: string;
    preco: number;
    genero: string;
}

interface Cliente {
    id: string;
    nome: string;
    quantidadeConsumida: number;
    genero: string;
}

const servicos: Servico[] = [
    { id: '1', nome: 'Racoon Hair', preco: 50.0, genero: 'unissex' },
    { id: '2', nome: 'Tratamento de Queratina', preco: 60.0, genero: 'feminino' },
    { id: '3', nome: 'Limpeza de Pele', preco: 80.0, genero: 'feminino' },
];

const produtos: Produto[] = [
    { id: '1', nome: 'Shampoo específico para Carecas', preco: 35.0, genero: 'masculino' },
    { id: '2', nome: 'Condicionador Saori', preco: 25.0, genero: 'feminino' },
    { id: '3', nome: 'Sérum Anti-Male-Gaze', preco: 80.0, genero: 'feminino' },
];

const clientes: Cliente[] = [
    { id: '1', nome: 'Enzo Nardi', quantidadeConsumida: 25, genero: 'masculino' },
    { id: '2', nome: 'Gerard Way', quantidadeConsumida: 20, genero: 'masculino' },
    { id: '3', nome: 'Maria Clara', quantidadeConsumida: 18, genero: 'feminino' },
];

const Listagem: React.FC<Props> = ({ id, tema }) => {
    const [activeTab, setActiveTab] = useState<string>('produto');

    const calcularMaisConsumidosPorGenero = (itens: { genero: string }[]) => {
        const contagemPorGenero: { [key: string]: number } = {};

        itens.forEach(item => {
            contagemPorGenero[item.genero] = (contagemPorGenero[item.genero] || 0) + 1;
        });

        return contagemPorGenero;
    };

    const obterMaisConsumidosPorGenero = (itens: { id: string, nome: string, preco?: number, quantidadeConsumida?: number, genero: string }[]) => {
        const contagemPorGenero = calcularMaisConsumidosPorGenero(itens);

        const itensPorGenero: { [key: string]: { id: string, nome: string, preco?: number, quantidadeConsumida?: number }[] } = {};
        itens.forEach(item => {
            if (!itensPorGenero[item.genero]) {
                itensPorGenero[item.genero] = [];
            }
            itensPorGenero[item.genero].push(item);
        });

        return itensPorGenero;
    };

    const obterClientesMenosConsumidores = (clientes: Cliente[]) => {
        const clientesOrdenados = [...clientes].sort((a, b) => a.quantidadeConsumida - b.quantidadeConsumida);
        const clientesMenosConsumidores = clientesOrdenados.slice(0, 10).reverse();
        return clientesMenosConsumidores;
    };

    const obterClientesMaisConsumidores = (clientes: Cliente[]) => {
        const clientesOrdenados = [...clientes].sort((a, b) => b.quantidadeConsumida - a.quantidadeConsumida);
        const clientesMaisConsumidores = clientesOrdenados.slice(0, 10);
        return clientesMaisConsumidores;
    };

    useEffect(() => {
        const tabs = document.querySelectorAll('.tabs');
        if (M && M.Tabs) {
            M.Tabs.init(tabs);
        }
    }, []);

    const renderLista = (itens: { id: string, nome: string, preco?: number, quantidadeConsumida?: number }[]) => (
        <ul>
            {itens.map(item => (
                <li key={item.id}>
                    {`${item.id} - ${item.nome} - ${item.preco ? item.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) : item.quantidadeConsumida + ' unidades'}`}
                </li>
            ))}
        </ul>
    );

    const itensMaisConsumidosPorGenero = obterMaisConsumidosPorGenero(
        activeTab === 'produto' ? produtos :
            activeTab === 'servico' ? servicos :
                clientes
    );

    const clientesMenosConsumidores = obterClientesMenosConsumidores(clientes);
    const clientesMaisConsumidores = obterClientesMaisConsumidores(clientes);

    return (
        <>
            <div className="row center-align">
                <div className="col s12">
                    <ul className="tabs">
                        <li className="tab col s4" onClick={() => setActiveTab('produto')}>
                            <a className={activeTab === 'produto' ? 'active' : ''} href="#produtoTab">Listagem Produto</a>
                        </li>
                        <li className="tab col s4" onClick={() => setActiveTab('servico')}>
                            <a className={activeTab === 'servico' ? 'active' : ''} href="#servicoTab">Listagem Serviço</a>
                        </li>
                        <li className="tab col s4" onClick={() => setActiveTab('cliente')}>
                            <a className={activeTab === 'cliente' ? 'active' : ''} href="#clienteTab">Listagens Relacionadas aos Clientes</a>
                        </li>
                    </ul>
                </div>
                <div id="produtoTab" className={`col s12 ${activeTab === 'produto' ? 'active' : ''}`}>
                    <div className="card">
                        <div className="card-content">
                            <span className="card-title">Listar Produto</span>
                            {renderLista(produtos)}
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-content">
                            <span className="card-title">Produtos mais consumidos por gênero</span>
                            {Object.keys(itensMaisConsumidosPorGenero).map((genero, index) => (
                                <div key={index}>
                                    <h5>{genero}</h5>
                                    {renderLista(itensMaisConsumidosPorGenero[genero])}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div id="servicoTab" className={`col s12 ${activeTab === 'servico' ? 'active' : ''}`}>
                    <div className="card">
                        <div className="card-content">
                            <span className="card-title">Listar serviços</span>
                            {renderLista(servicos)}
                        </div>
                        <div className="row" style={{ marginBottom: '20px' }}></div>
                    </div>
                    <div className="card">
                        <div className="card-content">
                            <span className="card-title">Serviços mais consumidos por gênero</span>
                            {Object.keys(itensMaisConsumidosPorGenero).map((genero, index) => (
                                <div key={index}>
                                    <h5>{genero}</h5>
                                    {renderLista(itensMaisConsumidosPorGenero[genero])}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div id="clienteTab" className={`col s12 ${activeTab === 'cliente' ? 'active' : ''}`}>
                <div className="card">
                    <div className="card-content">
                        <span className="card-title">Top 10 clientes que mais consumiram</span>
                        {renderLista(clientesMaisConsumidores)}
                    </div>
                </div>
                <div className="card">
                    <div className="card-content">
                        <span className="card-title">Top 10 clientes que menos consumiram</span>
                        {renderLista(clientesMenosConsumidores)}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Listagem;
