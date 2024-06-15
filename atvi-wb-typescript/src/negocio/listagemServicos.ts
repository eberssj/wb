import Servico from "../modelo/servico";

export default class ListagemServicos {
    private servicos: Array<Servico>

    constructor(servicos: Array<Servico>) {
        this.servicos = servicos
    }

    public listar(): void {
        this.servicos.forEach(servico => {
            console.log(`Nome: ${servico.nome}`);
            console.log(`Valor: ${servico.valor}`);
        });
    }
}
