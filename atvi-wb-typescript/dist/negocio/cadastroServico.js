"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const entrada_1 = __importDefault(require("../io/entrada"));
const servico_1 = __importDefault(require("../modelo/servico"));
const cadastro_1 = __importDefault(require("./cadastro"));
class CadastroServico extends cadastro_1.default {
    constructor(servicos) {
        super();
        this.servicos = servicos;
        this.entrada = new entrada_1.default();
    }
    cadastrar() {
        console.log(`\nInício do cadastro de serviço`);
        let nome = this.entrada.receberTexto(`Por favor informe o nome do serviço: `);
        let valor = this.entrada.receberNumero(`Por favor informe o valor do serviço: `);
        let servico = new servico_1.default(nome, valor);
        this.servicos.push(servico);
        console.log(`\nCadastro de serviço concluído :)\n`);
    }
}
exports.default = CadastroServico;
