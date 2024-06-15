"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Cliente {
    constructor(nome, nomeSocial, genero, cpf) {
        this.nome = nome;
        this.nomeSocial = nomeSocial;
        this.genero = genero;
        this.cpf = cpf;
        this.rgs = [];
        this.dataCadastro = new Date();
        this.telefones = [];
        this.produtosConsumidos = [];
        this.servicosConsumidos = [];
    }
    get getCpf() {
        return this.cpf;
    }
    get getRgs() {
        return this.rgs;
    }
    get getDataCadastro() {
        return this.dataCadastro;
    }
    get getTelefones() {
        return this.telefones;
    }
    get getProdutosConsumidos() {
        return this.produtosConsumidos;
    }
    get getServicosConsumidos() {
        return this.servicosConsumidos;
    }
    consumirProduto(produto) {
        this.produtosConsumidos.push(produto);
    }
    consumirServico(servico) {
        this.servicosConsumidos.push(servico);
    }
    calcularTotalGasto() {
        let totalProdutos = this.produtosConsumidos.reduce((total, produto) => total + produto.valor, 0);
        let totalServicos = this.servicosConsumidos.reduce((total, servico) => total + servico.valor, 0);
        return totalProdutos + totalServicos;
    }
}
exports.default = Cliente;
