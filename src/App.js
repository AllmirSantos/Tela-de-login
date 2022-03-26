import React, { Componet } from "react";

import { BoxCenter, BoxAll, btnLogin } from "./styles";

function App() {
  return (
    <BoxAll>
      <BoxCenter>
        <sectionOne>
          <sectionOneRadius>
            <text id="title">Hospital</text>
            <img src="https://assim.com.br/site/img/contratar-plano-de-saude.png"></img>

            <text id="copyright">
              copyright © 2020 todos os direitos reservados
            </text>
          </sectionOneRadius>
        </sectionOne>
        <sectionTwo>
          <sectionTwoRadius>
            <section>
              <text id="titeLogin"> Bem vindo ao Gurumed</text>
              <text id="titeInforLogin"> Registre sua conta</text>
            </section>
            <section>
              <text className="TextInput"> Nome </text>
              <input placeholder="João" />
              <text className="TextInput"> Email </text>
              <input placeholder="joaodemaria@gmail.com" />
              <text className="TextInput"> Nome </text>
              <input placeholder="senha" type="password" />
            </section>
            <section>
              <btnLogin>
                <text>Cadastrar</text>
              </btnLogin>
            </section>
          </sectionTwoRadius>
        </sectionTwo>
      </BoxCenter>
    </BoxAll>
  );
}

export default App;
