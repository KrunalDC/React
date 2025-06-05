import { useState } from "react";

export const useCounter = () => {
  const [number, setDisplaynumber] = useState(0);
  const increaseValue = () => {
    setDisplaynumber(number + 1);
  };
  const decreaseValue = () => {
    setDisplaynumber(number - 1);
  };
  const resetVal = () => {
    setDisplaynumber(0);
  };
  return { number, increaseValue, decreaseValue, resetVal };
};
