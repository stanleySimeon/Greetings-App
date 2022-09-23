import React from 'react';
import Greetings from './components/Greetings';
import './styles/main.css';

function App() {
  return (
    <div className="App container-fluid px-4 md:p-0 w-full bg-gradient-to-r from-purple to-black hover:from-sky-600 hover:to-black h-screen flex flex-col justify-center items-center">
      <Greetings />
    </div>
  );
}

export default App;
