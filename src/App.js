import React, { Componet } from "react";

import { BoxCenter, BoxAll, BoxAcessInputs, BtnLogin } from "./styles";

function App() {
  return (
    <BoxAll>
      <BoxCenter>
        <sectionOne>
          <sectionOneRadius>
            <img
              id="imgLogo"
              src="https://gurumed.com.br/wp-content/uploads//2020/12/gurumed-branca-novo.svg"
            ></img>

            <img
              id="imgMed"
              src="https://assim.com.br/site/img/contratar-plano-de-saude.png"
            ></img>

            <text id="copyright">
              copyright © 2020 todos os direitos reservados
            </text>
          </sectionOneRadius>
        </sectionOne>
        <sectionTwo>
          <sectionTwoRadius>
            <section>
              <text id="titleLogin"> Bem vindo ao Gurumed</text>
              <text id="titleInforLogin"> Registre sua conta</text>
            </section>
            <section>
              <BoxAcessInputs>
                <text className="TextInput"> Nome </text>
                <input placeholder="João" />
              </BoxAcessInputs>

              <BoxAcessInputs>
                <text className="TextInput"> Email </text>
                <input placeholder="joaodemaria@gmail.com" />
              </BoxAcessInputs>
              <BoxAcessInputs>
                <text className="TextInput"> Senha </text>
                <input placeholder="senha" type="password" />
              </BoxAcessInputs>
            </section>
            <section>
              <BtnLogin>
                <button>
                  <text>Cadastrar</text>
                </button>
              </BtnLogin>
            </section>
          </sectionTwoRadius>
        </sectionTwo>
      </BoxCenter>
    </BoxAll>
  );
}

export default App;
