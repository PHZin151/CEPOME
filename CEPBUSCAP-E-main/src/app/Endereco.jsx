function Endereco({ dados }) {
  if (!dados.cep) {
    return null;
  }

  return (
    <div>
      <h2>Endereço Encontrado</h2>

      <p>
        <strong>CEP:</strong> {dados.cep}
      </p>

      <p>
        <strong>Logradouro:</strong> {dados.logradouro}
      </p>

      <p>
        <strong>Bairro:</strong> {dados.bairro}
      </p>

      <p>
        <strong>Cidade:</strong> {dados.localidade}
      </p>

      <p>
        <strong>UF:</strong> {dados.uf}
      </p>
    </div>
  );
}

export default Endereco;