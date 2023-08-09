import React, { useState } from 'react';

const ThrottledButton = () => {
  const [clickCount, setClickCount] = useState(0);
  const [throttledClickCount, setThrottledClickCount] = useState(0);
  const [isThrottled, setIsThrottled] = useState(false);
console.log("clickCount",clickCount);
console.log("throttledClickCount",throttledClickCount);


  const handleClick = () => {
    setClickCount((prevCount) => prevCount + 1);

    if (!isThrottled) {
      setIsThrottled(true);
      setThrottledClickCount((prevCount) => prevCount + 1);

      setTimeout(() => {
        setIsThrottled(false);
      }, 3000); // Throttle interval of 1 second (1000 milliseconds)
    }
  };

  return (
    <div>
      <button onClick={handleClick}>Click me</button>
      <p>Total clicks: {clickCount}</p>
      <p>Throttled clicks: {throttledClickCount}</p>
    </div>
  );
};

export default ThrottledButton;