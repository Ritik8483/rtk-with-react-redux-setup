import { useState, useEffect } from 'react';

const useDebounce = (value:string, delay:number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
console.log("useDebounce",debouncedValue);

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    console.log("debounceTimer",debounceTimer);
    

    return () => {
      clearTimeout(debounceTimer);
    };
  }, [value, delay]);

  return debouncedValue;
};

export default useDebounce;