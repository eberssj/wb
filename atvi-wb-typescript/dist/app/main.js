"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const entrada_1 = __importDefault(require("../io/entrada"));
const empresa_1 = __importDefault(require("../modelo/empresa"));
const cadastroCliente_1 = __importDefault(require("../negocio/cadastroCliente"));
const cadastroProduto_1 = __importDefault(require("../negocio/cadastroProduto"));
const cadastroServico_1 = __importDefault(require("../negocio/cadastroServico"));
const listagemClientes_1 = __importDefault(require("../negocio/listagemClientes"));
const listagemProdutos_1 = __importDefault(require("../negocio/listagemProdutos"));
const listagemServicos_1 = __importDefault(require("../negocio/listagemServicos"));
const listagemProdutosServicosMaisConsumidos_1 = __importDefault(require("../negocio/listagemProdutosServicosMaisConsumidos"));
const listagemProdutosServicosMaisConsumidosPorGenero_1 = __importDefault(require("../negocio/listagemProdutosServicosMaisConsumidosPorGenero"));
const listagemClientesMenosConsumiram_1 = __importDefault(require("../negocio/listagemClientesMenosConsumiram"));
const listagemClientesMaisConsumiramValor_1 = __importDefault(require("../negocio/listagemClientesMaisConsumiramValor"));
const registroConsumo_1 = __importDefault(require("../negocio/registroConsumo"));
console.log(`Bem-vindo ao cadastro de clientes do Grupo World Beauty`);
let empresa = new empresa_1.default();
let execucao = true;
while (execucao) {
    console.log(`Opções:`);
    console.log(`1 - Cadastrar cliente`);
    console.log(`2 - Listar todos os clientes`);
    console.log(`3 - Cadastrar produto`);
    console.log(`4 - Cadastrar serviço`);
    console.log(`5 - Listar todos os produtos`);
    console.log(`6 - Listar todos os serviços`);
    console.log(`7 - Registrar consumo de produto ou serviço`);
    console.log(`8 - Listar produtos ou serviços mais consumidos`);
    console.log(`9 - Listar produtos ou serviços mais consumidos por gênero`);
    console.log(`10 - Listar os 10 clientes que menos consumiram produtos ou serviços`);
    console.log(`11 - Listar os 5 clientes que mais consumiram em valor`);
    console.log(`0 - Sair`);
    let entrada = new entrada_1.default();
    let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `);
    switch (opcao) {
        case 1:
            let cadastroCliente = new cadastroCliente_1.default(empresa.getClientes);
            cadastroCliente.cadastrar();
            break;
        case 2:
            let listagemClientes = new listagemClientes_1.default(empresa.getClientes);
            listagemClientes.listar();
            break;
        case 3:
            let cadastroProduto = new cadastroProduto_1.default(empresa.getProdutos);
            cadastroProduto.cadastrar();
            break;
        case 4:
            let cadastroServico = new cadastroServico_1.default(empresa.getServicos);
            cadastroServico.cadastrar();
            break;
        case 5:
            let listagemProdutos = new listagemProdutos_1.default(empresa.getProdutos);
            listagemProdutos.listar();
            break;
        case 6:
            let listagemServicos = new listagemServicos_1.default(empresa.getServicos);
            listagemServicos.listar();
            break;
        case 7:
            let listagemMaisConsumidos = new listagemProdutosServicosMaisConsumidos_1.default(empresa.getClientes);
            listagemMaisConsumidos.listar();
            break;
        case 8:
            let listagemMaisConsumidosPorGenero = new listagemProdutosServicosMaisConsumidosPorGenero_1.default(empresa.getClientes);
            listagemMaisConsumidosPorGenero.listar();
            break;
        case 9:
            let listagemMenosConsumiram = new listagemClientesMenosConsumiram_1.default(empresa.getClientes);
            listagemMenosConsumiram.listar();
            break;
        case 10:
            let listagemMaisConsumiramValor = new listagemClientesMaisConsumiramValor_1.default(empresa.getClientes);
            listagemMaisConsumiramValor.listar();
            break;
        case 11:
            let registroConsumo = new registroConsumo_1.default(empresa); // Novo caso
            registroConsumo.registrar();
            break;
        case 0:
            execucao = false;
            console.log(`Até mais`);
            break;
        default:
            console.log(`Operação não entendida :(`);
    }
}
