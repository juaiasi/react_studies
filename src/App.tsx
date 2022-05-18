import { useState } from 'react'
import Button from './components/Button'
import Form from './components/Form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Form />
      <Button />
    </div>
  )
}

export default App
