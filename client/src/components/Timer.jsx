// import React, { useState, useEffect } from 'react';

// const formatTime = (seconds) => {
//     const minutes = Math.floor(seconds / 60);
//     const remainingSeconds = seconds % 60;
//     return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
// };

// const Timer = () => {
//     const [seconds, setSeconds] = useState(0);

//     useEffect(() => {
//         const intervalId = setInterval(() => {
//             setSeconds((prevSeconds) => prevSeconds + 1);
//         }, 1000);

//         return () => clearInterval(intervalId);
//     }, []);

//     return (
//         <div>
//             <h2>Timer</h2>
//             <p>Time elapsed: {formatTime(seconds)}</p>
//         </div>
//     );
// };

// export default Timer;