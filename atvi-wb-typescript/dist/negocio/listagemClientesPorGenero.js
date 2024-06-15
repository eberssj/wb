"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const listagem_1 = __importDefault(require("./listagem"));
class ListagemClientesPorGenero extends listagem_1.default {
    constructor(clientes) {
        super();
        this.clientes = clientes;
    }
    listar() {
        console.log(`\nLista de todos os clientes por gênero:`);
        const clientesPorGenero = this.clientes.reduce((acc, cliente) => {
            if (!acc[cliente.genero]) {
                acc[cliente.genero] = [];
            }
            acc[cliente.genero].push(cliente);
            return acc;
        }, {});
        for (const genero in clientesPorGenero) {
            console.log(`Gênero: ${genero}`);
            clientesPorGenero[genero].forEach(cliente => {
                console.log(`Nome: ${cliente.nome}`);
                console.log(`Nome social: ${cliente.nomeSocial}`);
                console.log(`CPF: ${cliente.getCpf.getValor}`);
                console.log(`--------------------------------------`);
            });
        }
        console.log(`\n`);
    }
}
exports.default = ListagemClientesPorGenero;
