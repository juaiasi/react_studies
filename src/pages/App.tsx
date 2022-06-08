import { useState } from 'react'
import Form from '../components/Form'
import List from '../components/List'
import '../index.css'
import style from './App.module.scss'
import Timer from '../components/Timer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className={style.AppStyle}>
      <Form />
      <List />
      <Timer />
    </div>
  )
}

export default App
