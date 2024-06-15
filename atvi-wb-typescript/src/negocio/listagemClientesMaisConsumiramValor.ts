import Cliente from "../modelo/cliente";

export default class ListagemClientesMaisConsumiramValor {
    private clientes: Array<Cliente>

    constructor(clientes: Array<Cliente>) {
        this.clientes = clientes
    }

    public listar(): void {
        let clientesOrdenados = this.clientes.sort((a, b) => {
            let totalA = a.getProdutosConsumidos.reduce((sum, prod) => sum + prod.valor, 0) +
                a.getServicosConsumidos.reduce((sum, serv) => sum + serv.valor, 0);
            let totalB = b.getProdutosConsumidos.reduce((sum, prod) => sum + prod.valor, 0) +
                b.getServicosConsumidos.reduce((sum, serv) => sum + serv.valor, 0);
            return totalB - totalA;
        });

        let topClientes = clientesOrdenados.slice(0, 5);

        topClientes.forEach(cliente => {
            console.log(`Nome: ${cliente.nome}`);
            console.log(`Total Consumido: ${cliente.getProdutosConsumidos.reduce((sum, prod) => sum + prod.valor, 0) +
                cliente.getServicosConsumidos.reduce((sum, serv) => sum + serv.valor, 0)}`);
        });
    }
}
