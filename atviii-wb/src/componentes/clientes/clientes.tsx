import React, { useState } from 'react';
import './clientes.css';

const clientes = [
  { nome: 'Amanda Mendes', genero: 'feminino' },
  { nome: 'Gabriel Santos', genero: 'masculino' },
  { nome: 'Laura Duarte', genero: 'feminino' },
  { nome: 'Pedro Costa', genero: 'masculino' },
  { nome: 'Ana Santos', genero: 'feminino' },
  { nome: 'João Oliveira', genero: 'masculino' },
  { nome: 'Mariana Almeida', genero: 'feminino' },
  { nome: 'Daniel Martins', genero: 'masculino' },
  { nome: 'Carolina Alves', genero: 'feminino' },
  { nome: 'Lucas Ferreira', genero: 'masculino' },
  { nome: 'Juliana Almeida', genero: 'feminino' },
  { nome: 'Rafaela Ferreira', genero: 'feminino' },
  { nome: 'Gustavo Almeida', genero: 'masculino' },
  { nome: 'Isabela Santos', genero: 'feminino' },
  { nome: 'Matheus Martins', genero: 'masculino' },
  { nome: 'Luana Almeida', genero: 'feminino' },
  { nome: 'Luiz Alves', genero: 'masculino' },
  { nome: 'Camila Ferreira', genero: 'feminino' },
  { nome: 'Diego Martins', genero: 'masculino' },
  { nome: 'Beatriz Alves', genero: 'feminino' },
  { nome: 'Enzo Oliveira', genero: 'masculino' },
  { nome: 'Larissa Ferreira', genero: 'feminino' },
  { nome: 'Lucas Alves', genero: 'masculino' },
  { nome: 'Natália Oliveira', genero: 'feminino' },
  { nome: 'Carolina Santos', genero: 'feminino' },
  { nome: 'Guilherme Alves', genero: 'masculino' },
  { nome: 'Julia Ferreira', genero: 'feminino' },
  { nome: 'Ricardo Martins', genero: 'masculino' }
];

const Clientes = () => {
  const [tab, setTab] = useState(0);

  return (
    <div className="container">
      <div className="card">
        <div className="card-content">
          <div className="row">
            <div className="col s12">
              <ul className="tabs">
                <li className={`tab col s4 ${tab === 0 ? 'active' : ''}`}>
                  <a href="#test1" onClick={() => setTab(0)}>
                    Todos
                  </a>
                </li>
                <li className={`tab col s4 ${tab === 1 ? 'active' : ''}`}>
                  <a href="#test2" onClick={() => setTab(1)}>
                    Masculinos
                  </a>
                </li>
                <li className={`tab col s4 ${tab === 2 ? 'active' : ''}`}>
                  <a href="#test3" onClick={() => setTab(2)}>
                    Femininos
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div id="test1" className="col s12">
            {tab === 0 &&
              clientes.map((cliente, i) => (
                <div key={i} className="card">
                  <div className="card-content">
                    <span className="card-title">{cliente.nome}</span>
                    <p>{cliente.genero}</p>
                  </div>
                </div>
              ))}
          </div>

          <div id="test2" className="col s12">
            {tab === 1 &&
              clientes
                .filter((cliente) => cliente.genero === 'masculino')
                .map((cliente, i) => (
                  <div key={i} className="card">
                    <div className="card-content">
                      <span className="card-title">{cliente.nome}</span>
                      <p>{cliente.genero}</p>
                    </div>
                  </div>
                ))}
          </div>

          <div id="test3" className="col s12">
            {tab === 2 &&
              clientes
                .filter((cliente) => cliente.genero === 'feminino')
                .map((cliente, i) => (
                  <div key={i} className="card">
                    <div className="card-content">
                      <span className="card-title">{cliente.nome}</span>
                      <p>{cliente.genero}</p>
                    </div>
                  </div>
                ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clientes;
