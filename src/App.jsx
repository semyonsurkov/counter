import { useState } from 'react';
import './index.css';
import './App.css';

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(step);

  function calculateFutureDate() {
    const currentDate = new Date();
    const futureDate = new Date(currentDate + 1);
    futureDate.setDate(currentDate.getDate() + count);
    return futureDate;
  }

  return (
    <>
      <div>
        <input
          type="range"
          min="1"
          max="10"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <span>{`Step: ${step}`}</span>
      </div>
      <div>
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        ></input>
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>
      <div>
        <button
          onClick={() => {
            setStep(0);
            setCount(0);
          }}
        >
          Reset
        </button>
      </div>
      <div>
        <p>{`Current Date: ${new Date().toDateString()}`}</p>
        <p>{`Future Date: ${calculateFutureDate().toDateString()}`}</p>
      </div>
    </>
  );
}

export default Counter;
