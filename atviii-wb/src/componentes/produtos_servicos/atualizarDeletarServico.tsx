import React, { useState, useEffect } from "react";
import 'materialize-css/dist/css/materialize.min.css';
import './produto.css';

type Props = {
    id: string,
    tema: string;
};

const servicos = [
    { id: '1', nome: 'Racoon Hair' },
    { id: '2', nome: 'Tratamento de Queratina' },
    { id: '3', nome: 'Limpeza de Pele' },
];

function buscarServico(query: string) {
    if (servicos.some(servico => servico.id === query)) {
        return servicos.find(servico => servico.id === query);
    }

    return servicos.find(servico => servico.nome.toLowerCase() === query.toLowerCase());
}

const ServicosClientes: React.FC<Props> = ({ id: initialId, tema }) => {
    const [activeTab, setActiveTab] = useState<string>('delete');
    const [id, setId] = useState<string>(initialId);
    const [nome, setNome] = useState<string>('');
    const [metodoSelecionado, setMetodoSelecionado] = useState<string>('');
    const [buscou, setBuscou] = useState<boolean>(false);

    const handleMetodoChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setMetodoSelecionado(event.target.value);
    }

    const handleBuscarClick = () => {
        let servico;

        if (metodoSelecionado) {
            if (metodoSelecionado === '1' && id) {
                console.log(`Busca por ID: ${id}`);
                servico = buscarServico(id);
            } else if (metodoSelecionado === '2' && nome) {
                console.log(`Busca por Nome: ${nome}`);
                servico = buscarServico(nome);
            }
        }

        if (servico) {
            setId(servico.id);
            setNome(servico.nome);
            setBuscou(true);
        }
    }

    const renderInputs = () => {
        return (
            <>
                {metodoSelecionado === '1' && (
                    <div className="input-field col s12">
                        <input id="id" type="text" className="validate" value={id} onChange={(e) => setId(e.target.value)} />
                        <label htmlFor="id">ID</label>
                    </div>
                )}
                {metodoSelecionado === '2' && (
                    <div className="input-field col s12">
                        <input id="nome" type="text" className="validate" value={nome} onChange={(e) => setNome(e.target.value)} />
                        <label htmlFor="nome">Nome</label>
                    </div>
                )}
                <div>
                    <ul>
                        <li>1 - Racoon Hair </li>
                        <li>2 - Tratamento de Queratina </li>
                        <li>3 - Limpeza de Pele </li>
                    </ul>
                </div>
            </>
        );
    }

    const handleDeletarClick = () => {
        alert('Serviço deletado!');
    }

    const handleTabClick = (tabName: string) => {
        setActiveTab(tabName);
    }

    useEffect(() => {
        const tabs = document.querySelectorAll('.tabs');
        M.Tabs.init(tabs);
    }, []);

    let estiloBotao = `btn waves-effect waves-light ${tema}`;

    return (
        <div className="row center-align">
            <div className="col s12">
                <ul className="tabs">
                    <li className="tab col s6" onClick={() => handleTabClick('delete')}>
                        <a className={activeTab === 'delete' ? 'active' : ''} href="#deleteTab">Deletar Serviço</a>
                    </li>
                    <li className="tab col s6" onClick={() => handleTabClick('update')}>
                        <a className={activeTab === 'update' ? 'active' : ''} href="#updateTab">Atualizar Cadastro</a>
                    </li>
                </ul>
            </div>
            <div id="deleteTab" className={`col s12 ${activeTab === 'delete' ? 'active' : ''}`}>
                <div className="card">
                    <div className="card-content">
                        <span className="card-title">Deletar Serviço</span>
                        <div className="input-field col s12">
                            <option value="" disabled></option>
                            <select
                                id="metodo"
                                className="browser-default"
                                onChange={handleMetodoChange}
                                value={metodoSelecionado}
                            >
                                <option value=''></option>
                                <option value="1">Procurar por ID</option>
                                <option value="2">Procurar por Nome</option>
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
                        {((nome || id) && buscou) && (
                            <div>
                                <p>Nome: {nome}</p>
                                <p>ID: {id}</p>
                                <button className="btn waves-effect waves-light" onClick={handleDeletarClick}>
                                    Deletar
                                    <i className="material-icons right">delete</i>
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div id="updateTab" className={`col s12 ${activeTab === 'update' ? 'active' : ''}`}>
                <div className="card">
                    <div className="card-content">
                        <span className="card-title">Atualizar Cadastro</span>
                        <div className="input-field col s12">
                            <input id="nome" type="text" className="validate" />
                            <label htmlFor="nome">Nome</label>
                        </div>
                        <div className="input-field col s12">
                            <input id="descricao" type="text" className="validate" />
                            <label htmlFor="descricao">Descrição</label>
                        </div>
                        <div className="input-field col s12">
                            <input id="preco" type="text" className="validate" />
                            <label htmlFor="preco">Preço</label>
                        </div>
                        <div className="row" >
                            <div className="col s12">
                                <button className={estiloBotao} type="submit" name="action">
                                    Submit
                                    <i className="material-icons right">send</i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="row" style={{ marginBottom: '20px' }}></div>
                </div>
            </div>
        </div>
    );
}

export default ServicosClientes;
