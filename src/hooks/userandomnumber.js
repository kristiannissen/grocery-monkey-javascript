/**
 *
 */
import { useState, useEffect, useCallback } from "react";

const useRandomNumber = () => {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    let _number = Math.floor(Math.random() * new Date().getTime());
    setNumber(_number);
  }, []);

  const newNumber = useCallback(() => {
    let _number = Math.floor(Math.random() * new Date().getTime());
    setNumber(_number);
    return _number;
  });

  return newNumber();
};

export { useRandomNumber };
