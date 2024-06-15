"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const entrada_1 = __importDefault(require("../io/entrada"));
class RegistroConsumo {
    constructor(empresa) {
        this.empresa = empresa;
        this.entrada = new entrada_1.default();
    }
    registrar() {
        console.log(`\nInício do registro de consumo`);
        let cpf = this.entrada.receberTexto(`Por favor, informe o CPF do cliente: `);
        let cliente = this.empresa.getClientes.find(cliente => cliente.getCpf.getValor === cpf);
        if (!cliente) {
            console.log(`Cliente não encontrado!`);
            return;
        }
        let tipoConsumo = this.entrada.receberTexto(`Digite 'P' para produto ou 'S' para serviço: `).toUpperCase();
        if (tipoConsumo === 'P') {
            let nomeProduto = this.entrada.receberTexto(`Informe o nome do produto: `);
            let produto = this.empresa.getProdutos.find(produto => produto.nome === nomeProduto);
            if (!produto) {
                console.log(`Produto não encontrado!`);
                return;
            }
            cliente.consumirProduto(produto);
            console.log(`Produto ${produto.nome} consumido pelo cliente ${cliente.nome}.`);
        }
        else if (tipoConsumo === 'S') {
            let nomeServico = this.entrada.receberTexto(`Informe o nome do serviço: `);
            let servico = this.empresa.getServicos.find(servico => servico.nome === nomeServico);
            if (!servico) {
                console.log(`Serviço não encontrado!`);
                return;
            }
            cliente.consumirServico(servico);
            console.log(`Serviço ${servico.nome} consumido pelo cliente ${cliente.nome}.`);
        }
        else {
            console.log(`Tipo de consumo inválido!`);
        }
        console.log(`Total gasto pelo cliente ${cliente.nome}: $${cliente.calcularTotalGasto()}`);
        console.log(`\nRegistro de consumo concluído :)\n`);
    }
}
exports.default = RegistroConsumo;
