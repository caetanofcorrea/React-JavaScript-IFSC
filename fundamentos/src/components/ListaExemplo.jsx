import { useState } from 'react';

function ListaExemplo() {
    const [itens, setItens] = useState(['Maçã', 'Banana', 'Laranja']);
    function removerUltimoItem(){
        setItens((prevItens) => prevItens.slice(0, -1));
    }
    function adicionarItem(){
        setItens((prevItens) => [...prevItens, 'Uva']);
    }
  return (
    <div>
      <h2>Minha Lista de Frutas</h2>
      <ul>
        {itens.map((item, index) => (<li key={index}>{item}</li>))}
      </ul>
      <button onClick={adicionarItem}>Adicionar Uva</button>
      <button onClick={removerUltimoItem}>Remover último item</button>
    </div>
  )
}

export default ListaExemplo
