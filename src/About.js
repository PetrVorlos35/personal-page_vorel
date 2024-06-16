// About.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

function About() {
  const navigate = useNavigate();

  return (
    <div className="p-8 bg-gray-700 rounded-lg shadow-md max-w-md mx-auto mt-10 flex flex-col items-center justify-center">
      <h2 className="text-2xl font-bold mb-4 text-blue-300">O mně</h2>
      <p className="text-white mb-6">
        Jsem webový vývojář a rád se učím nové technologie. Použití Tailwind CSS mi pomáhá rychle vytvářet krásné a přizpůsobené uživatelské rozhraní.
      </p>
      {/* Přidání tlačítka zpět */}
      <button
        onClick={() => navigate('/')}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
      >
        Zpět
      </button>
    </div>
  );
}

export default About;
