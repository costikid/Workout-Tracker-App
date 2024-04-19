import React, { useState, useEffect } from 'react';

const Timer = ({ seconds }) => {
  const [remainingSeconds, setRemainingSeconds] = useState(seconds);

  useEffect(() => {
    let interval;
    if (remainingSeconds > 0) {
      interval = setInterval(() => {
        setRemainingSeconds(prevSeconds => prevSeconds - 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [remainingSeconds]);

  return (
    <div>
      <h2>Timer: {remainingSeconds} seconds</h2>
    </div>
  );
};

export default Timer;