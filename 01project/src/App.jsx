import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-3xl font-bold bg-orange-400 p-4">My New Project</h1>
      <h1>Git And GitHub</h1>
    </>
  );
}

export default App;
