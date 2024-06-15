import Cliente from "../modelo/cliente";
import Produto from "../modelo/produto";
import Servico from "../modelo/servico";
import Listagem from "./listagem";

export default class ListagemProdutosServicosMaisConsumidos extends Listagem {
    private clientes: Array<Cliente>;
    constructor(clientes: Array<Cliente>) {
        super();
        this.clientes = clientes;
    }
    public listar(): void {
        console.log(`\nLista dos produtos e serviços mais consumidos:`);

        const consumoMap = new Map<string, { tipo: string, quantidade: number }>();

        this.clientes.forEach(cliente => {
            cliente.getProdutosConsumidos.forEach(produto => {
                if (consumoMap.has(produto.nome)) {
                    consumoMap.get(produto.nome)!.quantidade += 1;
                } else {
                    consumoMap.set(produto.nome, { tipo: 'Produto', quantidade: 1 });
                }
            });
            cliente.getServicosConsumidos.forEach(servico => {
                if (consumoMap.has(servico.nome)) {
                    consumoMap.get(servico.nome)!.quantidade += 1;
                } else {
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
