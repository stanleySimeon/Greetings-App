import React from 'react';
import Greetings from './components/Greetings';
import './styles/main.css';

function App() {
  return (
    <div className="App container w-full bg-gradient-to-r from-purple to-black hover:from-sky-600 hover:to-black md:w-8/12 h-screen flex flex-col justify-center items-center m-auto">
      <Greetings />
    </div>
  );
}

export default App;
