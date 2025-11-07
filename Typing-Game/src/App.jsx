import { useState } from 'react'
import { UserInput } from './components/UserInput';
import { Questions } from './components/Questions';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Questions />
    <UserInput />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App
