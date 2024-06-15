"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const listagem_1 = __importDefault(require("./listagem"));
class ListagemProdutosServicosMaisConsumidosPorGenero extends listagem_1.default {
    constructor(clientes) {
        super();
        this.clientes = clientes;
    }
    listar() {
        console.log(`\nLista dos produtos e serviços mais consumidos por gênero:`);
        const consumoMap = new Map();
        this.clientes.forEach(cliente => {
            const genero = cliente.genero;
            if (!consumoMap.has(genero)) {
                consumoMap.set(genero, new Map());
            }
            const generoMap = consumoMap.get(genero);
            cliente.getProdutosConsumidos.forEach(produto => {
                if (generoMap.has(produto.nome)) {
                    generoMap.get(produto.nome).quantidade += 1;
                }
                else {
                    generoMap.set(produto.nome, { tipo: 'Produto', quantidade: 1 });
                }
            });
            cliente.getServicosConsumidos.forEach(servico => {
                if (generoMap.has(servico.nome)) {
                    generoMap.get(servico.nome).quantidade += 1;
                }
                else {
                    generoMap.set(servico.nome, { tipo: 'Serviço', quantidade: 1 });
                }
            });
        });
        consumoMap.forEach((generoMap, genero) => {
            console.log(`\nGênero: ${genero}`);
            const consumoArray = Array.from(generoMap.entries()).sort((a, b) => b[1].quantidade - a[1].quantidade);
            consumoArray.forEach(([nome, info]) => {
                console.log(`Nome: ${nome}`);
                console.log(`Tipo: ${info.tipo}`);
                console.log(`Quantidade Consumida: ${info.quantidade}`);
                console.log(`--------------------------------------`);
            });
        });
        console.log(`\n`);
    }
}
exports.default = ListagemProdutosServicosMaisConsumidosPorGenero;
