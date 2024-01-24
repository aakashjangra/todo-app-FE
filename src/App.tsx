import { useState } from 'react'
import './App.css'
import Todos from './components/Todos'

function App() {

  return (
    <main className='main h-screen w-screen text-white bg-v-dark-blue flex items-center justify-center'>
      <Todos />
    </main>
  )
}

export default App
