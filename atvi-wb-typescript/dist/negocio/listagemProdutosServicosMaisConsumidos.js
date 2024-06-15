"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const listagem_1 = __importDefault(require("./listagem"));
class ListagemProdutosServicosMaisConsumidos extends listagem_1.default {
    constructor(clientes) {
        super();
        this.clientes = clientes;
    }
    listar() {
        console.log(`\nLista dos produtos e serviços mais consumidos:`);
        const consumoMap = new Map();
        this.clientes.forEach(cliente => {
            cliente.getProdutosConsumidos.forEach(produto => {
                if (consumoMap.has(produto.nome)) {
                    consumoMap.get(produto.nome).quantidade += 1;
                }
                else {
                    consumoMap.set(produto.nome, { tipo: 'Produto', quantidade: 1 });
                }
            });
            cliente.getServicosConsumidos.forEach(servico => {
                if (consumoMap.has(servico.nome)) {
                    consumoMap.get(servico.nome).quantidade += 1;
                }
                else {
                    consumoMap.set(servico.nome, { tipo: 'Serviço', quantidade: 1 });
                }
            });
        });
        const consumoArray = Array.from(consumoMap.entries()).sort((a, b) => b[1].quantidade - a[1].quantidade);
        consumoArray.forEach(([nome, info]) => {
            console.log(`Nome: ${nome}`);
            console.log(`Tipo: ${info.tipo}`);
            console.log(`Quantidade Consumida: ${info.quantidade}`);
            console.log(`--------------------------------------`);
        });
        console.log(`\n`);
    }
}
exports.default = ListagemProdutosServicosMaisConsumidos;
