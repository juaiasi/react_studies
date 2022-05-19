import { useState } from 'react'
import Button from '../components/Button'
import Form from '../components/Form'
import List from '../components/List'
import '../index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Form />
      <List />
      <Button />
    </div>
  )
}

export default App
