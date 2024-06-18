import React, { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css';
import './compra.css';

type Props = {
    id: string;
    cpf: string;
    tema: string;
};

interface State {
    activeTab: string;
    id: string;
    nome: string;
    tema: string;
    cpf: string;
    produto: string;
    servico: string;
    buscou: boolean;
    metodoSelecionado: string;
    mSelecionado: string;
}

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

export default class Compra extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            activeTab: 'delete',
            id: props.id,
            nome: '',
            cpf: props.cpf,
            tema: props.tema,
            metodoSelecionado: '',
            produto: '',
            servico: '',
            buscou: false,
            mSelecionado: ''
        };
    }

    handleSelectionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        this.setState({ mSelecionado: event.target.value });
    }

    handleMetodoChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        this.setState({
            metodoSelecionado: event.target.value
        });
    }

    handleBuscarClick = () => {
        const { metodoSelecionado, cpf, nome, id } = this.state;
        let cliente;
        if (metodoSelecionado) {
            if (metodoSelecionado === '1' && cpf) {
                cliente = buscarCliente(cpf);
            } else if (metodoSelecionado === '2' && nome) {
                cliente = buscarCliente(nome);
            } else if (metodoSelecionado === '3' && id) {
                cliente = buscarCliente(id);
            }
        }
        if (cliente) {
            this.setState({
                id: cliente.id,
                nome: cliente.nome,
                cpf: cliente.cpf,
                buscou: true
            });
        }
    }

    renderInputs() {
        const { metodoSelecionado } = this.state;
        return (
            <>
                {metodoSelecionado === '1' && (
                    <div className="input-field col s12">
                        <input id="cpf" type="text" className="validate" value={this.state.cpf} onChange={(e) => this.setState({ cpf: e.target.value })} />
                        <label htmlFor="cpf">CPF</label>
                    </div>
                )}
                {metodoSelecionado === '2' && (
                    <div className="input-field col s12">
                        <input id="nome" type="text" className="validate" value={this.state.nome} onChange={(e) => this.setState({ nome: e.target.value })} />
                        <label htmlFor="nome">Nome</label>
                    </div>
                )}
                {metodoSelecionado === '3' && (
                    <div className="input-field col s12">
                        <input id="id" type="text" className="validate" value={this.state.id} onChange={(e) => this.setState({ id: e.target.value })} />
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

    handleDeletarClick = () => {
        alert('Serviço deletado!');
    }

    render() {
        const { tema } = this.props;
        const { metodoSelecionado, buscou, nome, id, cpf, mSelecionado } = this.state;
        let estiloBotao = `btn waves-effect waves-light ${tema}`;

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
                                    onChange={this.handleMetodoChange}
                                    value={metodoSelecionado}
                                >
                                    <option value=""></option>
                                    <option value="1">Procurar por CPF</option>
                                    <option value="2">Procurar por Nome</option>
                                    <option value="3">Procurar por ID</option>
                                </select>
                                <label>Método de Busca</label>
                            </div>
                            {this.renderInputs()}
                            <div className="input-field col s12">
                                <button className="btn waves-effect waves-light" onClick={this.handleBuscarClick}>
                                    Buscar
                                    <i className="material-icons right">search</i>
                                </button>
                            </div>
                            {(nome || id || cpf) && buscou && (
                                <div className="row">
                                    <form className="col s12">
                                        <div className="row">
                                            <div className="input-field col s12">
                                               <h5>Escolha o que foi consumido:</h5>
                                                <select id="compra" className="browser-default" onChange={this.handleSelectionChange}>
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
}
