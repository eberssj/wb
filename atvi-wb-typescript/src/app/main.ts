import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa";
import CadastroCliente from "../negocio/cadastroCliente";
import CadastroProduto from "../negocio/cadastroProduto";
import CadastroServico from "../negocio/cadastroServico";
import ListagemClientes from "../negocio/listagemClientes";
import ListagemProdutos from "../negocio/listagemProdutos";
import ListagemServicos from "../negocio/listagemServicos";
import ListagemProdutosServicosMaisConsumidos from "../negocio/listagemProdutosServicosMaisConsumidos";
import ListagemProdutosServicosMaisConsumidosPorGenero from "../negocio/listagemProdutosServicosMaisConsumidosPorGenero";
import ListagemClientesMenosConsumiram from "../negocio/listagemClientesMenosConsumiram";
import ListagemClientesMaisConsumiramValor from "../negocio/listagemClientesMaisConsumiramValor";
import RegistroConsumo from "../negocio/registroConsumo"; 

console.log(`Bem-vindo ao cadastro de clientes do Grupo World Beauty`);
let empresa = new Empresa();
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

    let entrada = new Entrada();
    let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `);

    switch (opcao) {
        case 1:
            let cadastroCliente = new CadastroCliente(empresa.getClientes);
            cadastroCliente.cadastrar();
            break;
        case 2:
            let listagemClientes = new ListagemClientes(empresa.getClientes);
            listagemClientes.listar();
            break;
        case 3:
            let cadastroProduto = new CadastroProduto(empresa.getProdutos);
            cadastroProduto.cadastrar();
            break;
        case 4:
            let cadastroServico = new CadastroServico(empresa.getServicos);
            cadastroServico.cadastrar();
            break;
        case 5:
            let listagemProdutos = new ListagemProdutos(empresa.getProdutos);
            listagemProdutos.listar();
            break;
        case 6:
            let listagemServicos = new ListagemServicos(empresa.getServicos);
            listagemServicos.listar();
            break;
        case 7:
            let registroConsumo = new RegistroConsumo(empresa); 
            registroConsumo.registrar();
            break;
        case 8:
            let listagemMaisConsumidos = new ListagemProdutosServicosMaisConsumidos(empresa.getClientes);
            listagemMaisConsumidos.listar();
            break;
        case 9:
            let listagemMaisConsumidosPorGenero = new ListagemProdutosServicosMaisConsumidosPorGenero(empresa.getClientes);
            listagemMaisConsumidosPorGenero.listar();
            break;
        case 10:
            let listagemMenosConsumiram = new ListagemClientesMenosConsumiram(empresa.getClientes);
            listagemMenosConsumiram.listar();
            break;
        case 11:
            let listagemMaisConsumiramValor = new ListagemClientesMaisConsumiramValor(empresa.getClientes);
            listagemMaisConsumiramValor.listar();
            break;
        case 0:
            execucao = false;
            console.log(`Até mais`);
            break;
        default:
            console.log(`Operação não entendida :(`);
    }
}
