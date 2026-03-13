import React, { useState } from "react";

const Button = () => {

  const [age, setAge] = useState(0);

  const handleClick = () => {
    setAge(age + 1);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "60px" }}>

      <h2>Birthday Candle Counter</h2>

      <p>Age: {age}</p>

      <button onClick={handleClick}>Add Candle</button>

      <p>{"🕯️".repeat(age)}</p>

      <p>🎂</p>

    </div>
  );

};

export default Button;