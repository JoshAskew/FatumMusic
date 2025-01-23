import { useState, useEffect } from 'react';
import '../styles/index.css';

const Timer = () => {
  // Function to get the target time (1 week from now)
  const getTargetTime = () => new Date().getTime() + 7 * 24 * 60 * 60 * 1000; // 1 week in milliseconds

  // Function to get the target time from localStorage or calculate default target time (1 week from now)
  const getStoredTargetTime = () => {
    const storedTargetTime = localStorage.getItem('targetTime');
    return storedTargetTime ? parseInt(storedTargetTime, 10) : getTargetTime();
  };

  // State to store the remaining time
  const [timeLeft, setTimeLeft] = useState(getStoredTargetTime() - new Date().getTime());

  useEffect(() => {
    const targetTime = getStoredTargetTime(); // Get the target time from localStorage or calculate it

    const interval = setInterval(() => {
      const currentTime = new Date().getTime();
      const remainingTime = targetTime - currentTime;

      // If the time is up, reset the target time and store it in localStorage
      if (remainingTime <= 0) {
        const newTargetTime = getTargetTime();
        localStorage.setItem('targetTime', newTargetTime.toString());
        setTimeLeft(newTargetTime - currentTime);
      } else {
        setTimeLeft(remainingTime);
      }
    }, 1000); // Update every second

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []); // Empty dependency array to run only once

  // Convert timeLeft to days, hours, minutes, and seconds
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  return (
    <div className='timer-container'>
      <h2>Special Offer Ends Soon</h2>
      <div>
        <p>
          {days} days {hours} hours {minutes} minutes {seconds} seconds
        </p>
      </div>
    </div>
  );
};

export default Timer;
