
import React, { useState } from "react";
import 'materialize-css/dist/css/materialize.min.css';
import './compra.css';

type Props = {
    id: string;
    cpf: string;
    tema: string;
};

const clientes = [
    { id: '1', nome: 'Gerard Way', cpf: '11122233344' },
    { id: '2', nome: 'Livia WhengZhou', cpf: '55544433322' },
    { id: '3', nome: 'Sophia Pussati', cpf: '99988877766' },
];

function buscarCliente(query: string) {
    if (clientes.some(cliente => cliente.id === query)) {
        return clientes.find(cliente => cliente.id === query);
    } else if (clientes.some(cliente => cliente.cpf === query)) {
        return clientes.find(cliente => cliente.cpf === query);
    } else if (clientes.some(cliente => cliente.nome.toLowerCase() === query.toLowerCase())) {
        return clientes.find(cliente => cliente.nome.toLowerCase() === query.toLowerCase());
    }
    return null;
}

const Compra: React.FC<Props> = ({ id, cpf, tema }) => {
    const [activeTab, setActiveTab] = useState('delete');
    const [nome, setNome] = useState('');
    const [produto, setProduto] = useState('');
    const [servico, setServico] = useState('');
    const [buscou, setBuscou] = useState(false);
    const [metodoSelecionado, setMetodoSelecionado] = useState('');
    const [mSelecionado, setMSelecionado] = useState('');
    const [formId, setFormId] = useState(id);
    const [formCpf, setFormCpf] = useState(cpf);

    const handleSelectionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setMSelecionado(event.target.value);
    }

    const handleMetodoChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setMetodoSelecionado(event.target.value);
    }

    const handleBuscarClick = () => {
        let cliente;
        if (metodoSelecionado) {
            if (metodoSelecionado === '1' && formCpf) {
                cliente = buscarCliente(formCpf);
            } else if (metodoSelecionado === '2' && nome) {
                cliente = buscarCliente(nome);
            } else if (metodoSelecionado === '3' && formId) {
                cliente = buscarCliente(formId);
            }
        }
        if (cliente) {
            setFormId(cliente.id);
            setNome(cliente.nome);
            setFormCpf(cliente.cpf);
            setBuscou(true);
        }
    }

    const renderInputs = () => {
        return (
            <>
                {metodoSelecionado === '1' && (
                    <div className="input-field col s12">
                        <input id="cpf" type="text" className="validate" value={formCpf} onChange={(e) => setFormCpf(e.target.value)} />
                        <label htmlFor="cpf">CPF</label>
                    </div>
                )}
                {metodoSelecionado === '2' && (
                    <div className="input-field col s12">
                        <input id="nome" type="text" className="validate" value={nome} onChange={(e) => setNome(e.target.value)} />
                        <label htmlFor="nome">Nome</label>
                    </div>
                )}
                {metodoSelecionado === '3' && (
                    <div className="input-field col s12">
                        <input id="id" type="text" className="validate" value={formId} onChange={(e) => setFormId(e.target.value)} />
                        <label htmlFor="id">ID</label>
                    </div>
                )}
                <div>
                    <ul>
                        <li>1 - Gerard Way (CPF: 11122233344)</li>
                        <li>2 - Livia WhengZhou (CPF: 55544433322)</li>
                        <li>3 - Sophia Pussati (CPF: 99988877766)</li>
                    </ul>
                </div>
            </>
        );
    }

    const handleDeletarClick = () => {
        alert('Serviço deletado!');
    }

    const estiloBotao = `btn waves-effect waves-light ${tema}`;

    return (
        <div className="row center-align">
            <div className="searchTab">
                <div className="card">
                    <div className="card-content">
                        <span className="card-title">Comprar Produto ou Serviço</span>
                        <div className="input-field col s12">
                            <select
                                id="metodo"
                                className="browser-default"
                                onChange={handleMetodoChange}
                                value={metodoSelecionado}
                            >
                                <option value=""></option>
                                <option value="1">Procurar por CPF</option>
                                <option value="2">Procurar por Nome</option>
                                <option value="3">Procurar por ID</option>
                            </select>
                            <label>Método de Busca</label>
                        </div>
                        {renderInputs()}
                        <div className="input-field col s12">
                            <button className="btn waves-effect waves-light" onClick={handleBuscarClick}>
                                Buscar
                                <i className="material-icons right">search</i>
                            </button>
                        </div>
                        {(nome || formId || formCpf) && buscou && (
                            <div className="row">
                                <form className="col s12">
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <h5>Escolha o que foi consumido:</h5>
                                            <select id="compra" className="browser-default" onChange={handleSelectionChange}>
                                                <option value="">Opções</option>
                                                <option value="Produto">Produto</option>
                                                <option value="Servico">Serviço</option>
                                            </select>
                                        </div>
                                        {mSelecionado === 'Produto' && (
                                            <div className="input-field col s12">
                                                <input id="id_pro" type="text" className="validate" />
                                                <label htmlFor="id_pro">Insira o n° do produto consumido</label>
                                            </div>
                                        )}
                                        {mSelecionado === 'Servico' && (
                                            <div className="input-field col s12">
                                                <input id="id_pro" type="text" className="validate" />
                                                <label htmlFor="id_pro">Insira o n° do serviço consumido</label>
                                            </div>
                                        )}
                                    </div>
                                    <div className="row">
                                        <div className="col s12">
                                            <button className={estiloBotao} type="submit" name="action" onClick={() => alert('Comprado com sucesso!')}>
                                                Enviar
                                                <i className="material-icons right">send</i>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Compra;
