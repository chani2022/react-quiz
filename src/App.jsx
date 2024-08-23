import { useState } from 'react'
import { Quiz } from './quiz'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      <Quiz />
    </div>
  )
}

export default App
