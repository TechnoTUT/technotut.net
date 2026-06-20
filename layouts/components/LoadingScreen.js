import React, { useEffect, useState } from 'react';

const LoadingScreen = () => {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Progress bar animation simulation
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 5;
      });
    }, 45);

    // Fade out after completion
    const timer = setTimeout(() => {
      setFadeOut(true);
      const removeTimer = setTimeout(() => {
        setVisible(false);
      }, 600); // match CSS fade transition duration
      return () => clearTimeout(removeTimer);
    }, 1200);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className={`loading-screen-overlay ${fadeOut ? 'fade-out' : ''}`}>
      <div className="loading-content">
        <div className="logo-container">
          <svg className="loading-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300.41 74.96">
            <g id="レイヤー_1" data-name="レイヤー 1">
              {/* cls-1 (now white for dark loader bg) */}
              <polygon className="logo-white" points="44.85 26.68 44.86 48.23 51.94 44.15 51.97 38.96 56.46 41.54 63.52 37.46 44.85 26.68"/>
              <polygon className="logo-white" points="17.25 10.74 17.25 10.74 7.11 4.88 7.11 70.03 14.21 65.93 14.21 17.16 17.25 18.9 17.25 64.17 24.36 60.07 24.36 23.04 29.27 25.89 32.83 19.74 17.25 10.74"/>
              
              {/* cls-2 (red) */}
              <polygon className="logo-red" points="45.49 27.05 38.39 22.95 38.38 43.84 35.37 45.58 35.38 21.21 28.27 17.1 28.27 57.81 45.49 47.87 45.49 27.05"/>
              
              {/* text paths (white) */}
              <path className="logo-white" d="M73.74,25.78H64.6V18.55H90.14v7.22H81V57H73.74Z"/>
              <path className="logo-white" d="M99.59,49.7h14.64V57h-22V27.7h22V45.58H99.59Zm0-14.67V40h7.31V35Z"/>
              <path className="logo-white" d="M131,45.77h7.31V57h-22V27.7h22V39H131V35h-7.33V49.7H131Z"/>
              <path className="logo-white" d="M140.44,18.55h7.31V27.7h14.67V57h-7.31V35h-7.33V57h-7.33Z"/>
              <path className="logo-white" d="M171.86,57h-7.33V27.7h22V57H179.2V35h-7.33Z"/>
              <path className="logo-white" d="M210.59,27.7V57h-22V27.7ZM196,35V49.7h7.33V35Z"/>
              <path className="logo-white" d="M221.86,25.78h-9.15V18.55h25.54v7.22h-9.15V57h-7.25Z"/>
              <path className="logo-white" d="M258.69,18.55h7.22V57H240.37V18.55h7.25V49.78h11.07Z"/>
              <path className="logo-white" d="M277.18,25.78H268V18.55h25.54v7.22h-9.15V57h-7.25Z"/>
            </g>
          </svg>
          <div className="logo-glow"></div>
        </div>
        <div className="progress-container">
          <div className="progress-bar" style={{ width: `${progress}%` }}></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
