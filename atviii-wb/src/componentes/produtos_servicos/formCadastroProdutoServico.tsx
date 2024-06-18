import React, { useEffect, useRef } from "react";

type Props = {
  tema: string;
};

const FormularioCadastroProduto: React.FC<Props> = ({ tema }) => {
  const tabsRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (tabsRef.current) {
      M.Tabs.init(tabsRef.current);
    }
  }, []);

  const estiloBotao = `btn waves-effect waves-light ${tema}`;

  return (
    <div className="row">
      <div className="col s12">
        <ul ref={tabsRef} className="tabs">
          <li className="tab col s6">
            <a href="#cadastro-servico">Cadastro de Serviço</a>
          </li>
          <li className="tab col s6">
            <a href="#cadastro-produto">Cadastro de Produto</a>
          </li>
        </ul>
      </div>
      <div id="cadastro-produto" className="col s12">
        <div className="row">
          <div className="col s6 offset-s3">
            <form className="col s12">
              <div className="row">
                <div className="input-field col s12">
                  <input id="nome" type="text" className="validate" />
                  <label htmlFor="nome">Nome</label>
                </div>
                <div className="input-field col s12">
                  <input id="descricao" type="text" className="validate" />
                  <label htmlFor="descricao">Descrição</label>
                </div>
                <div className="input-field col s12">
                  <input id="preco" type="text" className="validate" />
                  <label htmlFor="preco">Preço de Venda</label>
                </div>
                <div className="input-field col s12">
                  <input id="estoque" type="text" className="validate" />
                  <label htmlFor="estoque">Estoque</label>
                </div>
              </div>
              <div className="row">
                <div className="col s12">
                  <button className={estiloBotao} type="submit" name="action">
                    Enviar
                    <i className="material-icons right">send</i>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div id="cadastro-servico" className="col s12">
        <div className="row">
          <div className="col s6 offset-s3">
            <form className="col s12">
              <div className="row">
                <div className="input-field col s12">
                  <input id="nome" type="text" className="validate" />
                  <label htmlFor="nome">Nome</label>
                </div>
                <div className="input-field col s12">
                  <input id="descricao" type="text" className="validate" />
                  <label htmlFor="descricao">Descrição</label>
                </div>
                <div className="input-field col s12">
                  <input id="preco" type="text" className="validate" />
                  <label htmlFor="preco">Preço de Venda</label>
                </div>
              </div>
              <div className="row">
                <div className="col s12">
                  <button className={estiloBotao} type="submit" name="action">
                    Enviar
                    <i className="material-icons right">send</i>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormularioCadastroProduto;
