import { useState } from "react"

function SomaNumero(props) {
    const [number2, setNumber2] = useState("");
    const [number1, setNumber1] = useState("");
    const [resultado, setResultado] = useState(0);
  
    let handleAdicionarTarefa = () => {
      const resultadoSoma = Number(number1) + Number(number2);
      setResultado(resultadoSoma);
      //setTextoTarefa(""); //ISSO LIMPA O CAMPO
    };
  
    return (
      <div>
        <input
          type="number"
          value={number1}
          onChange={(evento) => setNumber1(evento.target.value)}
          placeholder="Digite primeiro numero"
        />
        <input
          type="number"
          value={number2}
          onChange={(evento) => setNumber2(evento.target.value)}
          placeholder="Digite segundo numero"
        />
        <button onClick={handleAdicionarTarefa}>Adicionar</button>
        <p>Resultado: {resultado}</p>
      </div>
    );
  }

export default SomaNumero