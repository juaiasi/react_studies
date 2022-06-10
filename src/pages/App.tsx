import { useState } from 'react'
import Form from '../components/Form'
import List from '../components/List'
import '../index.css'
import style from './App.module.scss'
import Timer from '../components/Timer'
import {ITarefa} from '../types/tarefa'

function App() {
  // conteúdo das listas
  // useState: essa função permite usar estado, de forma que armazena em cookies aquilo que foi alterado
  // valor inicial, apesar de ser const pode ser alterado usando a função fornecida como parâmetro
        // dois parâmetros: o nome da lista e a função para aletarar (no caso, setTarefas)
  // const [tarefas, setTarefas] = useState([{
  //     tarefa:'React',
  //     tempo:'02:00:00'
  // },{
  //     tarefa:'Javascript',
  //     tempo:'01:00:00'
  // }])
  const [tarefas, setTarefas] = useState<ITarefa[]>([])

  return (
    <div className={style.AppStyle}>
      <Form setTarefas={setTarefas}/>
      <List tarefas={tarefas} />
      <Timer />
    </div>
  )
}

export default App
