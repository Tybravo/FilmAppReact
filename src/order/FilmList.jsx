import React, { useState } from 'react';
import style from '../styles/filmlist.module.css';
import CustomButton from '../reusables/CustomButton';


const CountOrder = () => {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h2>Count: {count}</h2>
  
      <CustomButton onClick={increaseCount} style={style.btn} textContent="Increase"/>
      <CustomButton onClick={decreaseCount} style={style.btn} textContent="Decrease"/>
      
       </div>
  );
};

export default CountOrder;

