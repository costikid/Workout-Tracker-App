import React, { useState, useEffect } from 'react';

interface TimerProps {
  seconds: number;
  onComplete: () => void;
}

const Timer: React.FC<TimerProps> = ({ seconds, onComplete }) => {
  const [remainingSeconds, setRemainingSeconds] = useState(seconds);

  useEffect(() => {
    let timeout;

    if (remainingSeconds > 0) {
      timeout = setTimeout(() => {
        setRemainingSeconds(prevSeconds => prevSeconds - 1);
      }, 1000);
    } else {
      onComplete(); // Вызываем onComplete, когда таймер завершается
    }

    return () => clearTimeout(timeout);
  }, [remainingSeconds, onComplete]);

  const minutes: number = Math.floor(remainingSeconds / 60);
  const secondsLeft: number = remainingSeconds % 60;

  return (
    <div className="timer card-custom">
      <div className="card-body">
        <h5 className="card-title">Timer</h5>
        <p className="card-text">
          Time Remaining: {minutes}:{secondsLeft < 10 ? `0${secondsLeft}` : secondsLeft}
        </p>
      </div>
    </div>
  );
};

export default Timer;