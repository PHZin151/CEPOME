import { useState } from "react";

function FormularioCEP({ buscarCEP }) {
  const [cep, setCep] = useState("");

  const enviarCEP = () => {
    buscarCEP(cep);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Digite o CEP"
        value={cep}
        onChange={(e) => setCep(e.target.value)}
      />

      <button onClick={enviarCEP}>
        Buscar
      </button>
    </div>
  );
}

export default FormularioCEP;