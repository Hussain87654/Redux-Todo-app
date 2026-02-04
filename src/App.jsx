import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
    <div className="min-h-screen w-full flex items-center justify-center p-6 bg-[#08001f] relative overflow-hidden">
      {/* Dynamic Background Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-72 h-72 bg-purple-600 rounded-full blur-[120px] opacity-50" />
      <div className="absolute bottom-[-10%] right-[-10%] w-72 h-72 bg-blue-600 rounded-full blur-[120px] opacity-50" />

      <div className="w-full max-w-lg z-10">
        <header className="mb-10 text-center">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-emerald-400 mb-2">
            NEO-TODO
          </h1>
          <p className="text-blue-200/60 tracking-widest uppercase text-xs">Futuristic Task Management</p>
        </header>

        <TodoInput />
        <TodoList />
      </div>
    </div>
    </>
  )
}

export default App
