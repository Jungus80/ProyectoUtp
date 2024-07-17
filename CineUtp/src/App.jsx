import { useState } from 'react'
import './App.css'
import { Navbar } from './components/Navbar'
import Principal from './components/Principal'
import Presentation from './Presentation'


function App() {
  const [showPresentation, setShowPresentation] = useState(true);
  const handleContinue = () => {
    setShowPresentation(false);
  };

  return (
    <div className="w-full h-full bg-white">
      {showPresentation ? (
        <Presentation onContinue={handleContinue} />
      ) : (
        <>
          <nav>
            <Navbar />
          </nav>
          <main>
            <Principal />
          </main>
        </>
      )}
    </div>
  );
};


export default App
