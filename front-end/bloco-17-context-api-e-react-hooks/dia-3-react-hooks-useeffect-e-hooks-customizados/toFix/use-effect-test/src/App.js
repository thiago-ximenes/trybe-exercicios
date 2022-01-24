import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [correct, setCorrect] = useState(false);

  useEffect(() => {
    const TEN_SECONDS = 10000;
    const interval = setInterval(() => {
      const random = Math.floor(Math.random() * 100)
      setCount(random);
      console.log(random)
    }
    , TEN_SECONDS);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (count % 5 === 0 || count % 3 === 0) {
      setCorrect(true);
      const interval = setInterval(() => {
        setCorrect(false);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [count]);

  return (
    <div className="App">
      <span>{ count }</span>
      <br />
      { correct && <span>Acerto</span> }
    </div>
  );
}

export default App;
