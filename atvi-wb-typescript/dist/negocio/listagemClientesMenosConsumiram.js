"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const listagem_1 = __importDefault(require("./listagem"));
class ListagemClientesMenosConsumiram extends listagem_1.default {
    constructor(clientes) {
        super();
        this.clientes = clientes;
    }
    listar() {
        console.log(`\nLista dos 10 clientes que menos consumiram produtos ou serviços:`);
        const clientesOrdenados = this.clientes.sort((a, b) => {
            let totalA = a.getProdutosConsumidos.length + a.getServicosConsumidos.length;
            let totalB = b.getProdutosConsumidos.length + b.getServicosConsumidos.length;
            return totalA - totalB;
        });
        const bottom10Clientes = clientesOrdenados.slice(0, 10);
        bottom10Clientes.forEach(cliente => {
            console.log(`Nome: ${cliente.nome}`);
            console.log(`Produtos Consumidos: ${cliente.getProdutosConsumidos.length}`);
            console.log(`Serviços Consumidos: ${cliente.getServicosConsumidos.length}`);
            console.log(`--------------------------------------`);
        });
        console.log(`\n`);
    }
}
exports.default = ListagemClientesMenosConsumiram;
