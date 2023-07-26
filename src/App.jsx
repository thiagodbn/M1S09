import { useState } from 'react'
import './App.css'
import CardAdicionar from './components/CardAdicionar'
import SomaNumero from './components/SomaNumero'
import ListItem from "./components/ListItem"
import TextName from './components/TextName'
import LimpaTarefa from './components/LimpaTarefa'

function App() {
  const [count, setCount] = useState(0)

  const [listaTarefas, setListaTarefas] = useState([])

  const adicionarTarefa = (texto) => {
    if(texto == ""){
      alert("É necessário escrever uma tarefa")
      return
    }

    const novaTarefa = {id: listaTarefas.length + 1, textoTarefa: texto, finalizado: false}
    setListaTarefas([...listaTarefas, novaTarefa])
}

const removerTarefa = (id) => {
  const novaLista = listaTarefas.filter(item => item.id != id)

  setListaTarefas(novaLista)
}


const removerTudo = () => {
  setListaTarefas([]);
}
  return (
    <>
    <h1>Atividade DEVinHouse</h1>
    
    <CardAdicionar adicionarTarefa={adicionarTarefa}/>
    <div className='containerapp'>
    {listaTarefas.map((tarefa) => (
        <ListItem key={tarefa.id} id={tarefa.id} removerTarefa={removerTarefa} textoTarefa={tarefa.textoTarefa} finalizado={tarefa.finalizado} />
        ))}
    </div>

    <div>   
       <button onClick={removerTudo}>Remover Tudo</button>
      </div>
    

    <hr className='dividir'/>

    <TextName/>
    <hr className='dividir'/> 

    <p>Soma dois numeros</p>
    <SomaNumero/>
    <hr className='dividir'/>




    
      
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
           <code>Thiago D B Noronha</code> Desenvolvido no DEVinHouse
        </p>
      </div>
      
    </>
  )
}

export default App
