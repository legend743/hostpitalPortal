import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="bg-gray-100 h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-blue-500">Tailwind is Working!</h1>
      <button className="mt-5 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">

        Test Button
      </button>
      <p className='text-5xl font-serif text-blue-700'>this is paragraph</p>
      <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    </div>
    </>
  )
}

export default App
