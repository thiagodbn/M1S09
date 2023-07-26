import { useState } from "react"

function LimpaTarefa(props) {
  const [limpatudo, setLimpatudo] = useState(props.limpatudo)
 
  const marcarTodasComoFinalizadas = () => {
    setLimpatudo(true);
  }

  const removerTodasTarefas = () => {
    props.removerTarefa(props.id); 
  }

  return (
      <div className="container">   
       <h3 className={limpatudo && 'marcar-finalizado'}>{props.textoTarefa}</h3>
       <button onClick={marcarTodasComoFinalizadas}>Finalizar Tudo</button>
       <button onClick={removerTodasTarefas}>Remover Tudo</button>
  
      </div>
  )
}

export default LimpaTarefa