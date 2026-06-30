import { useState } from "react";
import "./App.css";
import FormularioCEP from "./app/FormularioCep";
import Endereco from "./app/Endereco";

function App() {
  const [endereco, setEndereco] = useState({});

  const buscarCEP = async (cep) => {
    if (cep.length !== 8) {
      alert("Digite um CEP com 8 números.");
      return;
    }

    try {
      const resposta = await fetch(
        `https://viacep.com.br/ws/${cep}/json/`
      );

      const dados = await resposta.json();

      if (dados.erro) {
        alert("CEP não encontrado.");
        return;
      }

      setEndereco(dados);
    } catch (erro) {
      alert("Erro ao consultar CEP.");
    }
  };

  return (
    <div className="container">
      <h1>Consulta de CEP</h1>

      <FormularioCEP buscarCEP={buscarCEP} />

      <Endereco dados={endereco} />
    </div>
  );
}

export default App;