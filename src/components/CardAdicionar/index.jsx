import { useState } from "react"

function CardAdicionar(props) {
    const [textoTarefa, setTextoTarefa] = useState("");
  
    const handleAdicionarTarefa = () => {
      props.adicionarTarefa(textoTarefa);
      setTextoTarefa(""); //ISSO LIMPA O CAMPO
    };
  
    return (
      <div>
        <input
          type="text"
          value={textoTarefa}
          placeholder="adicionar tarefa"
          onChange={(evento) => setTextoTarefa(evento.target.value) }
        />
        <button onClick={() => handleAdicionarTarefa()}>Adicionar</button>
      </div>
    );
  }

export default CardAdicionar