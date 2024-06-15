import Cliente from "../modelo/cliente";
import Listagem from "./listagem";

export default class ListagemClientesPorGenero extends Listagem {
    private clientes: Array<Cliente>
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
    }
    public listar(): void {
        console.log(`\nLista de todos os clientes por gênero:`);
        const clientesPorGenero = this.clientes.reduce((acc, cliente) => {
            if (!acc[cliente.genero]) {
                acc[cliente.genero] = [];
            }
            acc[cliente.genero].push(cliente);
            return acc;
        }, {} as { [key: string]: Cliente[] });

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
