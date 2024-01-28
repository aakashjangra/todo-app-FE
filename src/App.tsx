import { useState } from 'react';
import './App.css';
import Todos from './components/Todos';
import darkDesktopBg from './media/images/bg-desktop-dark.jpg';
import lightDesktopBg from './media/images/bg-desktop-light.jpg';

function App() {
  console.log(darkDesktopBg)
  return (
    <main
      className={`main h-screen w-screen dark:text-white dark:bg-v-dark-blue    
        flex items-center justify-center 
        bg-[url('./media/images/bg-desktop-light.jpg')]
        dark:bg-[url('./media/images/bg-desktop-dark.jpg')]
      `}
    >
      <Todos />
    </main>
  );
}

export default App;
