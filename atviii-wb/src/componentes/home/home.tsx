import React, { useEffect, useState } from "react";
import 'materialize-css/dist/css/materialize.min.css';
import './home.css';

type Props = {
  tema: string;
};

interface ClienteMaisConsumidor {
  nome: string;
  quantidade: number;
}

const Home: React.FC<Props> = ({ tema }) => {
  const [clientesMaisConsumidores] = useState<ClienteMaisConsumidor[]>([
    { nome: 'Sophia Pussati', quantidade: 32 },
    { nome: 'Livia WhengZhou', quantidade: 29 },
    { nome: 'Diego Martinzez', quantidade: 21 },
    { nome: 'Juliana Mascovitt', quantidade: 17 },
    { nome: 'Rodrigo Guimarães', quantidade: 12 },
  ]);

  useEffect(() => {
    const tabs = document.querySelectorAll('.tabs');
    M.Tabs.init(tabs);
  }, []);

  const clientesOrdenados = clientesMaisConsumidores.sort((a, b) => b.quantidade - a.quantidade);
  const top10Clientes = clientesOrdenados.slice(0, 10);

  return (
    <>
      <div className="cards-container">
        <div className="row center-align">
          <div className="dois">
            <div className="card">
              <div className="card-content">
                <span className="card-title">Clientes Mais Consumidores</span>
                <ul className="collection">
                  {top10Clientes.map((cliente, index) => (
                    <li key={index} className="collection-item">{cliente.nome}: {cliente.quantidade} unidades</li>
                  ))}
                </ul>
                <p><a href="/listagem#clienteTab">Visualizar a lista completa</a></p>
              </div>
            </div>
          </div>
          <div className="">
            <div className="card">
              <div className="card-content">
                <span className="card-title">Clientes que Mais Gastaram</span>
                <ul className="collection">
                  <li className="collection-item">Enzo Nardi: R$ 369.00</li>
                  <li className="collection-item">Joyce Silva: R$ 180.00</li>
                  <li className="collection-item">Maria Clara: R$ 167.00</li>
                  <li className="collection-item">Gerard Way: R$ 99.00</li>
                  <li className="collection-item">Helena Rabanete: R$ 32.00</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row center-align">
          <div className="">
            <div className="card medium">
              <div className="card-content">
                <span className="card-title">Produtos e Serviços Mais Consumidos</span>
                <div className="card-tabs">
                  <ul className="tabs tabs-fixed-width">
                    <li className="tab"><a href="#produtos">Produtos</a></li>
                    <li className="tab"><a href="#servicos">Serviços</a></li>
                  </ul>
                  <div className="row">
                    <div id="produtos" className="col s12">
                      <ul className="collection">
                        <li className="collection-item">Shampoo específico para Carecas: 160 unidades</li>
                        <li className="collection-item">Condicionador Saori: 40 unidades</li>
                        <li className="collection-item">Sérum Anti-Male-Gaze: 29 unidades</li>
                        <li className="collection-item">Máscara Lawrence: 15 unidades</li>
                      </ul>
                      <p><a href="/listagem#produtoTab">Visualizar a lista completa</a></p>
                    </div>
                    <div id="servicos" className="col s12">
                      <ul className="collection">
                        <li className="collection-item">Racoon Hair: R$ 40,00</li>
                        <li className="collection-item">Manicure da Lora: R$ 70,00</li>
                        <li className="collection-item">Tratamento de Queratina: R$ 120,00</li>
                        <li className="collection-item">Limpeza de Pele: R$ 90,00</li>
                      </ul>
                      <p><a href="/listagem#servicoTab">Visualizar a lista completa</a></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="card medium">
              <div className="card-content">
                <div className="row">
                  <span className="card-title">Produtos Mais Consumidos por Gênero</span>
                  <div className="card-tabs">
                    <ul className="tabs tabs-fixed-width">
                      <li className="tab"><a href="#feminino">Feminino</a></li>
                      <li className="tab"><a href="#masculino">Masculino</a></li>
                    </ul>
                  </div>
                </div>
                <div className="card-content">
                  {/* Tab Feminino */}
                  <div id="feminino">
                    <ul className="collection">
                      <li className="collection-item">Sérum Anti-Male-Gaze : 29 unidades</li>
                      <li className="collection-item">Condicionador Saori: 35 unidades</li>
                      <li className="collection-item">Shampoo específico para carecas: 1 unidade</li>
                    </ul>
                    <p><a href="/listagem#produtoTab">Visualizar a lista completa</a></p>
                  </div>
                  {/* Tab Masculino */}
                  <div id="masculino">
                    <ul className="collection">
                      <li className="collection-item">Shampoo específico Para Carecas: 159 unidades</li>
                      <li className="collection-item">Máscara Lawrence: 13 unidades</li>
                      <li className="collection-item">Condicionador Saori: 5 unidades</li>
                    </ul>
                    <p><a href="/listagem#produtoTab">Visualizar a lista completa</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
