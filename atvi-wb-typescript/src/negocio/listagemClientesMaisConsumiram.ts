import Cliente from "../modelo/cliente";
import Listagem from "./listagem";

export default class ListagemClientesMaisConsumiram extends Listagem {
    private clientes: Array<Cliente>
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
    }
    public listar(): void {
        console.log(`\nLista dos 10 clientes que mais consumiram produtos ou serviços:`);
        const clientesOrdenados = this.clientes.sort((a, b) => {
            let totalA = a.getProdutosConsumidos.length + a.getServicosConsumidos.length;
            let totalB = b.getProdutosConsumidos.length + b.getServicosConsumidos.length;
            return totalB - totalA;
        });
        const top10Clientes = clientesOrdenados.slice(0, 10);
        top10Clientes.forEach(cliente => {
            console.log(`Nome: ${cliente.nome}`);
            console.log(`Produtos Consumidos: ${cliente.getProdutosConsumidos.length}`);
            console.log(`Serviços Consumidos: ${cliente.getServicosConsumidos.length}`);
            console.log(`--------------------------------------`);
        });
        console.log(`\n`);
    }
}
