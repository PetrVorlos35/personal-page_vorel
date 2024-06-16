import React from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import About from './About';
import './App.css';

function Home() {
  return (
    <div className="App bg-gray-800 min-h-screen flex flex-col items-center justify-center">
      <header className="App-header text-center">
        <h1 className="text-4xl font-bold text-blue-600">
          Vítejte na mé osobní stránce
        </h1>
        <p className="text-lg text-white mt-4">
          Toto je moje první stránka postavená pomocí Reactu a Tailwind CSS!
        </p>
        {/* Přidání tlačítka pro přesměrování na stránku O mně */}
        <Link to="/about">
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
            O mně
          </button>
        </Link>
      </header>
    </div>
  );
}

function App() {
  return (
    <div>
      {/* Definice tras */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
