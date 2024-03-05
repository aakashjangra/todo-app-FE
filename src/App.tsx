import './App.css';
import Todos from './components/Todos';

function App() {
  return (
    <div
      className={`relative z-10 h-screen max-w-screen
     `}
    >
      <div
        className={`fixed h-[35vh] w-full top-0 bg-[url('./media/images/bg-desktop-light.jpg')]
        dark:bg-[url('./media/images/bg-desktop-dark.jpg')]`}
      ></div>
      <div
        className={`fixed h-full w-full top-[35vh] bg-[url("/glamorous.svg")] dark:bg-[url("/glamorous-light.svg")] dark:bg-v-dark-blue`}
      ></div>
      <main
        className={`dark:text-white     
        flex items-center justify-center 
         h-full w-full
        `}
      >
        <Todos />
      </main>
    </div>
  );
}

export default App;
