import Produto from "../modelo/produto";

export default class ListagemProdutos {
    private produtos: Array<Produto>

    constructor(produtos: Array<Produto>) {
        this.produtos = produtos
    }

    public listar(): void {
        this.produtos.forEach(produto => {
            console.log(`Nome: ${produto.nome}`);
            console.log(`Valor: ${produto.valor}`);
        });
    }
}
