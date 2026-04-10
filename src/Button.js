import React, { useState, useEffect } from "react";
import "./App.css";

function BirthdayCounter() {
  const [age, setAge] = useState(0);

  // Load saved age
  useEffect(() => {
    const savedAge = localStorage.getItem("age");
    if (savedAge) setAge(Number(savedAge));
  }, []);

  // Save age
  useEffect(() => {
    localStorage.setItem("age", age);
  }, [age]);

  const addCandle = () => {
    if (age < 120) setAge(age + 1);
  };

  const removeCandle = () => {
    if (age > 0) setAge(age - 1);
  };

  const handleInput = (e) => {
    const value = Number(e.target.value);
    if (value >= 0 && value <= 120) {
      setAge(value);
    }
  };

  return (
    <div className="container">
      <h2>Birthday Candle Counter</h2>

      <p className="age-text">Age: {age}</p>

      <input
        type="number"
        value={age}
        onChange={handleInput}
        className="input"
      />

      <div className="button-group">
        <button onClick={addCandle}>Add Candle</button>
        <button onClick={removeCandle}>Remove Candle</button>
        <button onClick={() => setAge(0)}>Reset</button>
      </div>

      <p className="message">
        {age === 0 ? "Add candles 🎉" : `Turning ${age}!`}
      </p>

      <div className="candles">
        {"🕯️".repeat(age)}
      </div>

      <p className="cake">🎂</p>
    </div>
  );
}

export default BirthdayCounter;